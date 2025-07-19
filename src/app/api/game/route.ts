import { NextResponse } from "next/server";
import { spawn, ChildProcess } from "child_process";

let pyProcess: ChildProcess | null = null;

export function POST() {
  if (pyProcess && !pyProcess.killed) {
    return NextResponse.json({ message: "Already hosting" }, { status: 300 });
  }

  pyProcess = spawn("python", ["./scripts/server.py"], {
    detached: true,
    stdio: "ignore",
  });

  pyProcess.unref();

  pyProcess.on("exit", () => {
    pyProcess = null;
  });

  return NextResponse.json({ message: "Host started" }, { status: 200 });
}

export function DELETE() {
  if (pyProcess && !pyProcess.killed && pyProcess.pid) {
    process.kill(pyProcess.pid);
    pyProcess = null;
    return NextResponse.json({ message: "Host stopped" }, { status: 200 });
  }
  return NextResponse.json(
    { error: "No active host session" },
    { status: 300 }
  );
}

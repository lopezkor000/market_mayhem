import socket, json, time, os

PORT = 8989

msg = str('lets play!').encode()

connected = json.dumps({
	"success": True
}).encode()

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
sock.settimeout(1)
sock.bind(('', PORT))

players = set()
errors = set()

while True:
	os.system('cls')
	print(f"Waiting for players... ({len(players)})", players, errors)
	sock.sendto(msg, ("<broadcast>", 9999))
	try:
		data, addr = sock.recvfrom(1024)
		if addr not in players:
			players.add(addr)
		sock.sendto(connected, addr)
	except TimeoutError:
		pass
	except socket.error as e:
		errors.add(e)
	if len(players) > 1:
		break

print('Succesfully terminated')

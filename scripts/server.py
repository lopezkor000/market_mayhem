import socket, json

PORT = 8989

msg = str('lets play!').encode()

connected = json.dumps({
	"success": True
}).encode()

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
sock.settimeout(1)
sock.bind(('', PORT))


with open('./public/data.json', 'r') as file:
	jsonData = json.load(file)

players = []
errors = set()

while True:
	sock.sendto(msg, ("<broadcast>", 9999))
	try:
		data, addr = sock.recvfrom(1024)
		if addr not in players:
			players.append(addr[0])
			jsonData['players'] = players
		sock.sendto(connected, addr)
	except TimeoutError:
		pass
	except socket.error as e:
		errors.add(e)
	with open('./public/data.json', 'w') as file:
		json.dump(jsonData, file)
	if len(players) > 1:
		break

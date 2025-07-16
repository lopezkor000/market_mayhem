import socket, json, os

PORT = 9999

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(("", PORT))

msg = str('hello').encode()


os.system('cls')
print('Waiting for game...')
data, addr = sock.recvfrom(1024)
print(f'Connecting to game on {addr}...')
sock.sendto(msg, addr)
data, addr = sock.recvfrom(1024)
connection = json.loads(data)
print(connection)
if connection['success']:
	print(f'Successfully connected to {addr}')

print('Let the games begin!')

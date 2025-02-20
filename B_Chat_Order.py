arr = []
for _ in range(int(input())):
    name = input()
    if name in arr:
        arr.remove(name)
    arr.insert(0, name)
print('\n'.join(arr))

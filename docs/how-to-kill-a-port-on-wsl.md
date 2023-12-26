No Windows:

```bash
# Lista todos os processos que estão rodando
netstat -ano
# Lista todos os processos que estão rodando na porta 8000
netstat -ano | findstr 8000
# Mata processo que está rodando na porta 8000 pelo PID
taskkill /f /pid <PID>
```

No Linux:

```bash
# Lista todos os processos que estão rodando
sudo netstat -tlpn
# Lista todos os processos que estão rodando na porta 8000
sudo netstat -tlpn | grep 8000
# Mata processo que está rodando na porta 8000
sudo kill -9 `sudo lsof -t -i:8000`
sudo kill -9 $(lsof -t -i:8000)
```
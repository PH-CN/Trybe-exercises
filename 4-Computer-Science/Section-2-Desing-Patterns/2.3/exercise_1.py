ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

class Log:
    def dispara_log(self, message):
        return message

class LogSuccess:
    def __init__(self, logger):
        self.logger = logger

    def dispara_log(self):
        print(self.logger.dispara_log("\033[0;32mO sistema está funcionando\033[0m"))

class LogWarning:
    def __init__(self, logger):
        self.logger = logger

    def dispara_log(self):
        print(self.logger.dispara_log("\033[0;33mO sistema está lento\033[0m"))

class LogError:
    def __init__(self, logger):
        self.logger = logger

    def dispara_log(self):
        print(self.logger.dispara_log("\033[0;31mO sistema está com erros\033[0m"))


normal_logger = Log()
log_sucess = LogSuccess(normal_logger)
log_sucess.dispara_log()
log_warning = LogWarning(normal_logger)
log_warning.dispara_log()
log_error = LogError(normal_logger)
log_error.dispara_log()

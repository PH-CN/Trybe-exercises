interface Logger {
  log(message: string): void
}

class ConsoleLogger implements Logger {
  
  log(message: string) {
    console.log(message)
  }
  
}

class ConsoleLogger2 implements Logger {
  
  log(message: string) {
    console.log(message + '2')
  }
}

interface Database {
  logger: Logger
  save(key: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {  }

  save(key: string, value: string) {
    this.logger.log(key)
    this.logger.log(value)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('name', 'pedro');
db2.save('name', 'tiago');
db3.save('name', 'joesley');
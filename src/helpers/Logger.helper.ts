class LogHelper {
  public info = (msg: string): void => {
    console.log(msg);
  };

  public error = (msg: string): void => {
    console.error(msg);
  };
}

export const Logger = new LogHelper();

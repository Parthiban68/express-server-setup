import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export class DayjsService {
  now() {
    return dayjs().format();
  }

  format(date: string, formatType: string) {
    return dayjs(date).format(formatType);
  }

  toIST(date: string) {
    return dayjs(date).tz("Asia/kolkata").format();
  }
}

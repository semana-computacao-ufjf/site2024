import ScheduleClient from "./scheduleClient";
import { EventDetail } from "@/types/event";
import { fakeEventApi } from "@/util/fakeApi";

export default function Schedule() {
  const events: EventDetail[] = fakeEventApi();
  return <ScheduleClient events={events} />;
}

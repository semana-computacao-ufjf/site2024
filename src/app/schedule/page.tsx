import { Event, EventType } from "@/types/event";
import ScheduleClient from "./scheduleClient";
import { fakeEventApi } from "@/util/fakeApi";

export default function Schedule() {
  // TODO: substituir pela query real da programação
  const events: Event[] = fakeEventApi();
  return <ScheduleClient events={events} />;
}

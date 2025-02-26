import { PortableText } from "@portabletext/react";
import { getGetInvolvedPage } from "@/sanity/sanity-utils";
import { GetInvolvedPage } from "@/types/GetInvolved";

async function getInvolved() {
  const getInvolvedPage: GetInvolvedPage = await getGetInvolvedPage();
  console.log(getInvolvedPage.upcomingEventsList[0].title);
  return (
    <>
      <div>{getInvolvedPage.pageTitle}</div>;
      <div>{getInvolvedPage.pastEventsTitle}</div>
      <div>{getInvolvedPage.pastEventsSubtitle}</div>
      {getInvolvedPage.upcomingEventsList.map((upcomingEvent) => {
        return (
          <>
            <div>Upcoming Event title = {upcomingEvent.title}</div>
          </>
        );
      })}
    </>
  );
}

export default getInvolved;

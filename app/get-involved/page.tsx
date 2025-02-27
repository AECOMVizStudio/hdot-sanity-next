import { PortableText } from "@portabletext/react";
import { getGetInvolvedPage } from "@/sanity/sanity-utils";
import { GetInvolvedPage } from "@/types/GetInvolved";

async function getInvolved() {
  const getInvolvedPage: GetInvolvedPage = await getGetInvolvedPage();

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-hdotTeal py-8">
        {getInvolvedPage.pageTitle}
      </h1>

      <div className="max-w-3xl mx-auto container px-4 md:px-0">
        <div className="text-2xl text-hdotTeal font-bold uppercase tracking-wide">
          {getInvolvedPage.upcomingEventsTitle || "Upcoming Events"}
        </div>
        <hr className="border-t-2 border-hdotTeal md:w-1/2" />
        {getInvolvedPage.upcomingEventsList.map((upcomingEvent) => {
          return (
            <section className="py-6" key={upcomingEvent._key}>
              <div className="bg-gray-100 shadow-lg p-6">
                <h2 className="text-xl font-bold uppercase tracking-wide">
                  {upcomingEvent.title} | {upcomingEvent.dateTime}
                </h2>

                <div className="mt-2">
                  <PortableText value={upcomingEvent.description} />
                </div>

                <div>
                  <a href={upcomingEvent.link} className="hover:text-hdotJade">
                    {upcomingEvent.link}
                  </a>
                </div>

                <h3 className="mt-6 text-lg font-bold uppercase text-hdotJade tracking-wide">
                  {upcomingEvent.documentsSectionTitle}
                </h3>

                <div className="mt-3 flex items-center space-x-3">
                  {upcomingEvent.documentsList?.map((document) => {
                    return (
                      <div key={document.fileUrl}>
                        <p className="text-gray-500 uppercase text-xs font-semibold">
                          {document.title}
                        </p>
                        <a
                          href={document.fileUrl}
                          className="text-gray-800 hover:hover:text-hdotJade font-medium"
                        >
                          PDF icon - link
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* Past Events */}
        <div>
          <div className="text-2xl text-hdotTeal font-bold uppercase tracking-wide">
            {getInvolvedPage.pastEventsTitle || "Past Events"}
          </div>
          <hr className="border-t-2 border-hdotTeal md:w-1/2" />

          {getInvolvedPage.pastEventsList.map((pastEvent) => {
            return (
              <section className="py-6" key={pastEvent._key}>
                <div className="bg-gray-100 shadow-lg p-6">
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    {pastEvent.title} | {pastEvent.dateTime}
                  </h2>

                  <div className="mt-2">
                    <PortableText value={pastEvent.description} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold uppercase text-hdotJade">
                    {pastEvent.documentsSectionTitle}
                  </h3>

                  <div className="mt-3 flex items-center space-x-3">
                    {pastEvent.documentsList?.map((document) => {
                      return (
                        <div key={document.fileUrl}>
                          <p className="text-gray-500 uppercase text-xs font-semibold">
                            {document.title}
                          </p>
                          <a
                            href={document.fileUrl}
                            className="text-gray-800 hover:hover:text-hdotJade font-medium"
                          >
                            PDF icon - link
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default getInvolved;

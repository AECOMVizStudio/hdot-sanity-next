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

      <div className="max-w-3xl mx-auto container">
        <h2 className="text-2xl font-bold uppercase tracking-wide">
          {getInvolvedPage.upcomingEventsTitle}
        </h2>
        <hr className="border-t-2 border-hdotTeal w-1/2" />
        {getInvolvedPage.upcomingEventsList.map((upcomingEvent) => {
          return (
            <section className="py-6 ">
              <div className="bg-gray-100 shadow-lg p-6">
                <h2 className="text-xl font-bold uppercase tracking-wide">
                  {upcomingEvent.title} | {upcomingEvent.dateTime}
                </h2>

                <div className="mt-2">
                  <PortableText value={upcomingEvent.description} />
                </div>

                <h3 className="mt-6 text-lg font-bold uppercase text-green-700 tracking-wide">
                  Meeting Materials
                </h3>

                <div className="mt-3 flex items-center space-x-3">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-semibold">
                      PDF
                    </p>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-green-700 font-medium"
                    ></a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            {getInvolvedPage.pastEventsTitle}
          </h2>
          <hr className="border-t-2 border-hdotTeal w-1/2" />

          {getInvolvedPage.pastEventsList.map((pastEvent) => {
            return (
              <section className="py-6 ">
                <div className="bg-gray-100 shadow-lg p-6">
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    {pastEvent.title} | {pastEvent.dateTime}
                  </h2>

                  <div className="mt-2">
                    <PortableText value={pastEvent.description} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold uppercase text-green-700 tracking-wide">
                    Meeting Materials
                  </h3>

                  <div className="mt-3 flex items-center space-x-3">
                    <div>
                      <p className="text-gray-500 uppercase text-xs font-semibold">
                        PDF
                      </p>
                      <a
                        href="#"
                        className="text-gray-800 hover:text-green-700 font-medium"
                      ></a>
                    </div>
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

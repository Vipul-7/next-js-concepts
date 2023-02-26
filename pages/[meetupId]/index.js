import MeetupDetails from "@/components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetails
      title="Vipul's home"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcjK_db1pjcqBVZq37ryXZRU-S2cMEdsrPQ&usqp=CAU"
      address="some address , some city, some state"
      description="First meetup"
    />
  );
};

export default MeetupDetailsPage;

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Vipul's home",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcjK_db1pjcqBVZq37ryXZRU-S2cMEdsrPQ&usqp=CAU",
        address: "some address , some city, some state",
        description: "First meetup",
      },
    },
  };
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Vipul's home",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcjK_db1pjcqBVZq37ryXZRU-S2cMEdsrPQ&usqp=CAU",
    address: "some address , some city, some state",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "kathi's home",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIfBFC3FU9DC9MEIClYYsU1XLJIglrwIiBg&usqp=CAU",
    address: "some address , some city, some state",
    description: "Second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async() => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate:10
  };
};

export default HomePage;

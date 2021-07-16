import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Steam_Rising_from_Chicago_River.jpg/450px-Steam_Rising_from_Chicago_River.jpg",
    address: " Some address 5, 12345 Some City",
    description: "This is our first meetup"
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Goose_Island_Brewery.jpg/800px-Goose_Island_Brewery.jpg",
      address: " Some address 6, 12345 Some City",
      description: "This is our second meetup"
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}/>;
};

export default HomePage;
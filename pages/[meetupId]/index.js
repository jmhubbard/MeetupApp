import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Steam_Rising_from_Chicago_River.jpg/450px-Steam_Rising_from_Chicago_River.jpg"
      title="First meetup"
      address="Some Street 5, Some City"
      description="This is the first meetup spot"
    />
  );
};

export default MeetupDetails;

import Moment from "moment";

function FormatDate(value) {
  return Moment(value).fromNow();
}

export default {
  FormatDate,
};

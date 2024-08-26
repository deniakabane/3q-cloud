import moment from "moment";
import "moment/locale/id";
moment.locale("id");

export const formatDate = (date) => {
  return moment(date).format("D MMMM YYYY");
};

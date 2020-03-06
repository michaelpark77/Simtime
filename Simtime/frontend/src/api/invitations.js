import Axios from "axios";

export const fetchInvitation = (id, data) => {
  return Axios.get(`/api/invitations/${id}`, tokenConfig(getState)).then(
    res => res.data
  );
};

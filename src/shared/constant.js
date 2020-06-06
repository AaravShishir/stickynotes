export let constants = {
  stickynotesapi: "https://us-central1-stickynotesapi.cloudfunctions.net/api/",
  api: {
    notes: {
      view: "alltodo",
      create: "addtodo",
      edit: "updatetodo/{0}",
      delete: "deletetodo/{0}",
    },
    user: {
      login: "login",
      logout: "logout",
      signup: "signup",
      forgotpwd: "forgotpassword",
      userdetails: "userdetails",
    },
  },
  localStorage: {
    authkey: "SN_AUTH",
  },
};

export let todos = [
  {
    todoId: "4R0hPLg4LvKTzYwxRAt0",
    title: "Hello India",
    body: "We are writing this awesome API India",
    createdOn: "2020-05-01T16:37:36.172Z",
    modifiedOn: "2020-05-01T16:37:36.172Z",
    background: "bg-snwarning",
  },
  {
    todoId: "l4ViPvPjZePuFcnKM4Ux",
    title: "Hello World",
    body: "We are writing this awesome API World",
    createdOn: "2020-05-01T16:04:09.574Z",
    modifiedOn: "2020-05-01T16:04:09.574Z",
    background: "bg-sndanger",
  },
  {
    todoId: "l4ViPvPjZePuFcnKM4U3",
    title: "Hello US",
    body: "We are writing this awesome API USA",
    createdOn: "2020-05-01T16:04:09.574Z",
    modifiedOn: "2020-05-01T16:04:09.574Z",
    background: "bg-snprimary",
  },
  {
    todoId: "l4ViPvPjZePuFcnKM4U4",
    title: "Hello Bengaluru",
    body: "We are writing this awesome API Bengaluru",
    createdOn: "2020-02-01T16:04:09.574Z",
    modifiedOn: "2020-02-01T16:04:09.574Z",
    background: "bg-sninfo",
  },
  {
    todoId: "l4ViPvPjZePuFcnKM4U8",
    title: "Hello Patna",
    body: "We are writing this awesome API Patna",
    createdOn: "2020-05-01T16:04:09.574Z",
    modifiedOn: "2020-05-01T16:04:09.574Z",
    background: "bg-snwarning",
  },
  {
    todoId: "l4ViPvPjZePzFcnKM4U3",
    title: "Hello US",
    body: "We are writing this awesome API USA",
    createdOn: "2020-05-01T16:04:09.574Z",
    modifiedOn: "2020-05-01T16:04:09.574Z",
    background: "bg-sninfo",
  },
  {
    todoId: "l4ViPvPjZfPuFcnKM4U4",
    title: "Hello Bengaluru",
    body: "We are writing this awesome API Bengaluru",
    createdOn: "2020-02-01T16:04:09.574Z",
    modifiedOn: "2020-02-01T16:04:09.574Z",
    background: "bg-sndanger",
  },
  {
    todoId: "l4ViPvPjZePurcnKM4U8",
    title: "Hello Patna",
    body: "We are writing this awesome API Patna",
    createdOn: "2020-05-01T16:04:09.574Z",
    modifiedOn: "2020-05-01T16:04:09.574Z",
    background: "bg-snprimary",
  },
];

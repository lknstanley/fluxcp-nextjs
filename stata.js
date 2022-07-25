import { proxywithComputed } from "valtio/utils";

const state = proxywithComputed({
  user: undefined,
});

import { AppDispatch } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";

export const useAppdispatch = () => useDispatch<AppDispatch>()
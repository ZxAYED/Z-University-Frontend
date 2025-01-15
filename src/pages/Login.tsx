import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import VerifyToken from "../utils/VerifyToken";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { error, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSumbit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = VerifyToken(res.data.accessToken);
    dispatch(setUser({ user, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          {...register("id")}
          placeholder="type here"
          type="text"
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          {...register("password")}
          placeholder="type here"
          type="text"
        ></input>
        <Button htmlType="submit">Log In</Button>
      </div>
    </form>
  );
};
export default Login;

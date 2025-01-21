/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { IUser, setUser } from "../redux/features/auth/authSlice";
import VerifyToken from "../utils/VerifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ZForm from "../components/ui/ZForm";
import ZInput from "./../components/ui/ZInput";

const Login = () => {
  const navigate = useNavigate();
  const [login, { error, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSumbit = async (data: FieldValues) => {
    const toastID = toast.loading("Loggin in", {
      duration: 2500,
      position: "top-right",
    });
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    try {
      const res = await login(userInfo).unwrap();
      const user = VerifyToken(res.data.accessToken) as IUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in successfull", {
        id: toastID,
        duration: 2500,
        position: "top-right",
      });
      if (user?.role === "superAdmin") {
        navigate(`/admin/dashboard`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, {
        id: toastID,
        duration: 2500,
        position: "top-right",
      });
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{ height: "100dvh", width: "full" }}
    >
      <ZForm onSubmit={onSumbit}>
        <div>
          <ZInput type="text" name="id" label={"ID :"}></ZInput>
        </div>
        <div>
          <ZInput type="text" name="password" label={"Password :"}></ZInput>
          <Button htmlType="submit">Log In</Button>
        </div>
      </ZForm>
    </Row>
  );
};
export default Login;

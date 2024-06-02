import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SoicalLogin from "@/components/social-login";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col *:font-medium gap-2">
        <Link className="text-white hover:text-red-800" href="/">
          <h1 className="text-2xl">Well come</h1>
        </Link>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput type="password" placeholder="Password" required errors={[]} />
        <FormInput type="password" placeholder="Confirm Password" required errors={[]} />
        <FormButton loading={false} text="Create account" />
      </form>
      <SoicalLogin />
    </div>
  );
}

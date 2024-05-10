import Link from "next/link";
import { cookies } from "next/headers";

export default function Home() {
    const createThemeCookie = async (formData: any) => {
        "use server";

        const selectedTheme = formData.get("theme");
        cookies().set("theme", selectedTheme);
    }

    return (
      <main>
          <Link
              href={'/peoples'}
              className={'text-3xl'}
          >
              <h2>Peoples list</h2>
          </Link>
          <form action={createThemeCookie}>
              <select name="theme">
                  <option value="dark">Dark Theme</option>
                  <option value="light">Light Theme</option>
              </select>
              <button type="submit">Create Theme Cookie</button>
          </form>
      </main>
  );
}

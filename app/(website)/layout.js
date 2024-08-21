import DrawerNav from "../component/navbar";
export const revalidate = 60;
export default function WebsiteLayout({ children }) {
  return (
    <section>
      <DrawerNav />
      {children}
      <div>ini footer</div>
    </section>
  );
}

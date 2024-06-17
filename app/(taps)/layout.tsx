import TabBar from "@/components/tap-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <TabBar />
    </div>
  );
}

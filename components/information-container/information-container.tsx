type props = {
  children: React.ReactNode;
};
export function InformationContainer({ children }: props) {
  return <div style={{ borderRadius: 10, borderColor: 'black' }}>{children}</div>;
}

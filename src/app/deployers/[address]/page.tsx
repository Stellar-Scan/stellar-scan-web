export default async function DeployerPage({ params }: { params: Promise<{ address: string }> }) {
  const { address } = await params;
  return <h1 className="text-xl font-mono">Deployer {address}</h1>;
}

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const hello = await HelloWorld.deploy();

  await hello.waitForDeployment();

  console.log("HelloWorld deployed to:", hello.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

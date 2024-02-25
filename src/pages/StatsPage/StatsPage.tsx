import Card from "../../components/Card";
import AddressListCard from "../../components/AddressListCard";
import CardMedium from "../../components/CardMedium";
import PageWrapper from "../../components/PageWrapper";
import useTokenContract from "../../hooks/useTokenContract";
import useGetTotalSupply from "../../hooks/useGetTotalSupply";
import { numberWithCommas } from "../../utils";
import useGetTokenPrice from "../../hooks/useGetTokenPrice";
import useGetStakingInfo from "../../hooks/useGetStakingInfo";
import useGetBurntAmount from "../../hooks/useGetBurntAmount";
import useGetDeployerAmount from "../../hooks/useGetDeployerAmount";
import useGetVestingAmount from "../../hooks/useGetVestingAmount";
import useGetTreasuryAmount from "../../hooks/useGetTreasuryAmount";
import useGetLiquidity from "../../hooks/useGetLiquidity";

function StatsPage() {
  const { contract: tokenContract } = useTokenContract();
  const { totalSupply, isLoading: isLoadingTotalSupply } = useGetTotalSupply({
    tokenContract,
  });
  const { totalStaked, isLoading: isLoadingStakingInfo } = useGetStakingInfo();
  const { tokenPrice, isLoading: isLoadingTokenPrice } = useGetTokenPrice();
  const { burntAmount, isLoading: isLoadingBurntAmount } = useGetBurntAmount();
  const { deployerAmount, isLoading: isLoadingDeployerAmount } =
    useGetDeployerAmount();
  const { vestingAmount, isLoading: isLoadingVestingAmount } =
    useGetVestingAmount();
  const { treasuryAmount, isLoading: isLoadingTreasuryAmount } =
    useGetTreasuryAmount();
  const isLoadingCirculating =
    isLoadingTotalSupply &&
    isLoadingBurntAmount &&
    isLoadingDeployerAmount &&
    isLoadingVestingAmount &&
    isLoadingTreasuryAmount;
  const circulatingSupply =
    totalSupply - burntAmount - deployerAmount - vestingAmount - treasuryAmount;
  const {
    totalLiquidity,
    wTiaPrice,
    isLoading: isLoadingLiquidity,
  } = useGetLiquidity();

  return (
    <PageWrapper>
      <div className="flex flex-col gap-10 w-full">
        <section className="relative px-3 md:px-6 xl:px-0 md:top-0 md:pt-[160px] pt-[120px] w-full">
          <div className="flex md:flex-row flex-col justify-around gap-2 mdgap-4 max-w-[1100px] mx-auto">
            <Card
              title="Total Supply"
              value={`${
                isLoadingTotalSupply
                  ? "Loading..."
                  : numberWithCommas(totalSupply || 0)
              }`}
            />
            <Card
              title="$TRESTLE Price"
              value={
                isLoadingTokenPrice
                  ? "Loading..."
                  : `$ ${Number.parseFloat(`${tokenPrice || 0}`).toFixed(5)}`
              }
            />
            <Card
              title="Burnt Supply"
              value={
                isLoadingBurntAmount
                  ? "Loading..."
                  : `${numberWithCommas(Number(burntAmount.toFixed(3)))}`
              }
            />
          </div>
          <div className="flex md:flex-row flex-col justify-around gap-4 max-w-[1100px] mx-auto mt-5 md:mt-0">
            <div className="flex flex-col justify-center items-start w-full gap-4 md:gap-0">
              <CardMedium
                data={[
                  {
                    title: "Staked Supply",
                    value: isLoadingStakingInfo
                      ? "Loading..."
                      : numberWithCommas(Number(totalStaked.toFixed(3))),
                  },
                  {
                    title: "Circulating Supply",
                    value: isLoadingCirculating
                      ? "Loading..."
                      : numberWithCommas(Number(circulatingSupply.toFixed(3))),
                  },
                ]}
              />
              <CardMedium
                data={[
                  {
                    title: "wTIA Liquidity",
                    value: isLoadingLiquidity
                      ? "Loading..."
                      : `$ ${numberWithCommas(
                          Number((totalLiquidity * wTiaPrice).toFixed(3))
                        )}`,
                  },
                  {
                    title: "wTIA Price",
                    value: isLoadingLiquidity
                      ? "Loading..."
                      : `$ ${numberWithCommas(Number(wTiaPrice.toFixed(2)))}`,
                  },
                ]}
              />
            </div>
            <AddressListCard
              data={[
                {
                  title: "Deployer Address",
                  value: "0x1964f3Eaf7d8fca7E559468a384453d2d8490744",
                  shortValue: "0x1964...0744",
                  url: "https://etherscan.io/address/1964f3Eaf7d8fca7E559468a384453d2d8490744",
                },
                {
                  title: "Treasury Contract",
                  value: "0x53DDA415Cc10822e00f5749670b0fe9713f44bF9",
                  shortValue: "0x53DD...4bF9",
                  url: "https://etherscan.io/address/53DDA415Cc10822e00f5749670b0fe9713f44bF9",
                },
                {
                  title: "Burnt Address",
                  value: "0x000000000000000000000000000000000000dEaD",
                  shortValue: "0x0000...dEaD",
                  url: "https://etherscan.io/token/0xdE8CD13B812BcD82218754A740b27E76ec1e86aD?a=0x000000000000000000000000000000000000dEaD",
                },
                {
                  title: "Vesting Contract",
                  value: "0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9",
                  shortValue: "0xAFb9...dCC9",
                  url: "https://etherscan.io/address/AFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default StatsPage;

import trestleCryptoImg from "../../assets/trestleCryptoBg.png";
import Button from "../../components/Button";
import OutlineBox from "../../components/OutlineBox";
import copyIcon from "../../assets/copy-icon.svg";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const EXCHANGE_URL="https://app.uniswap.org/swap?outputCurrency=0xdE8CD13B812BcD82218754A740b27E76ec1e86aD&chain=ethereum";

function BuyTrestleSectionImageContent() {
  return (
    <div className="relative flex w-full z-30 md:mt-0 min-h-[340px] rounded-3xl backdrop-blur-3xl h-full p-10 rounded-br-3xl">
      <img
        className="absolute object-cover top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] rounded-3xl"
        src={trestleCryptoImg}
      />
    </div>
  );
}

function BuyTrestleSectionMainContent() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  
  const handleCopyText = () => {
    copyToClipboard("0xdE8CD13B812BcD82218754A740b27E76ec1e86aD");
  };

  const handleOpenExchange = () => {
    window.open(EXCHANGE_URL, "_blank");
  }

  return (
    <div className="flex w-full flex-col z-30 justify-center md:mt-0 h-full p-14 border-[1.5px] rounded-3xl border-white/20 order-last">
      <div className="flex flex-col items-start gap-10 h-full justify-between">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-4 text-left items-start justify-start">
            <div className=" text-white text-3xl mb-2 max-w-[450px] font-quicksand font-extrabold pr-20">
              $TRESTLE
            </div>
            <div className="text-white/50 text-base max-w-[450px] font-quicksand font-medium pr-10">
              Earn from Trestle’s ecosystem by holding $TRESTLE to earn wTIA and
              validator revenue.
            </div>
            <div
              onClick={handleCopyText}
              className="flex justify-between w-full cursor-pointer hover:opacity-70 active:opacity-50"
            >
              <div className="hidden md:block text-white/70 text-base max-w-[450px] font-quicksand font-medium">
                0xdE8CD13B812BcD82218754A740b27E76ec1e86aD
              </div>
              <div className="block md:hidden text-white/70 text-base max-w-[450px] font-quicksand font-medium">
                0xdE8CD13B812BcD....6ec1e86aD
              </div>
              {isCopied ? (
                <div>Copied</div>
              ) : (
                <img src={copyIcon} className="w-[16px]" />
              )}
            </div>
            <div className="flex justify-end items-center my-auto w-full gap-10 mt-5 max-w-[250px]">
              <Button onClick={handleOpenExchange}>Buy $TRESTLE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuyTrestleSection() {
  return (
    <section className="md:w-[95%] xl:w-full top-0 mb-0 md:mt-[100px] mt-[50px] mx-8 h-full max-w-[1200px] md:mx-auto">
      <OutlineBox className="h-full relative flex flex-col gap-6 justify-center p-3.5">
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
          <BuyTrestleSectionImageContent />
          <BuyTrestleSectionMainContent />
        </div>
      </OutlineBox>
    </section>
  );
}

export default BuyTrestleSection;

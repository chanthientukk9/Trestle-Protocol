import BasicCard from "../../components/BasicCard";
import PageWrapper from "../../components/PageWrapper";

function ComingSoonPage() {
  return (
    <PageWrapper>
      <section className="relative px-3 md:px-6 xl:px-0 md:top-0 md:pt-[160px] pt-[120px] w-full max-w-[1200px] m-auto">
        <BasicCard className="text-center">
            <strong className="font-quicksand font-bold text-lg">Comming soon</strong>
        </BasicCard>
      </section>
    </PageWrapper>
  );
}

export default ComingSoonPage;

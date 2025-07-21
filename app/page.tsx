import BenefitView from "@/component/BenefitView/BenefitView";
import Footer from "@/component/Footer/Footer";
import HomeView from "@/component/HomeView/HomeView";
import QuestionView from "@/component/QuestionView/QuestionView";
import RequirementView from "@/component/RequirementView/RequirementView";
import StepView from "@/component/StepView/StepView";

export default function Home() {
  return (
    <div>
      <HomeView />
      <BenefitView />
      <StepView />
      <RequirementView />
      <QuestionView />
      <Footer />
    </div>
  );
}

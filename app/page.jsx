import Image from "next/image";
import ContentOne from "@/components/ContentOne";
import TableOne from "@/components/TableOne";
import ContentTwo from "@/components/ContentTwo";
import TableTwo from "@/components/TableTwo";
import TableThree from "@/components/TableThree";
import ContentThree from "@/components/ContentThree";
import ContentSix from "@/components/ContentSix";
export default function Home() {
  return (
    <div>
      <div className="base-content flex justify-center">
        <div className="w-full max-w-screen-xl px-4 text-center mt-10">
          <ContentOne></ContentOne>
          <TableOne></TableOne>
          <ContentTwo></ContentTwo>
          <TableTwo></TableTwo>
          <TableThree></TableThree>
          <ContentThree></ContentThree>
          <ContentSix></ContentSix>
        </div>
      </div>
    </div>
  );
}

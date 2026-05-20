"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Recycle, LineChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ServiceLP() {
  const searchParams = useSearchParams();
  const lineType = searchParams.get("line");

  const lineUrls = {
  default: "https://lin.ee/xxvBGTY",
  yashiro: "https://lin.ee/pQUaZDB",
  agencyB: "https://lin.ee/B社用URL",
  agencyC: "https://lin.ee/C社用URL",
};

const lineUrl = lineUrls[lineType] || lineUrls.default;
  const data = [
    { name: "A社", price: 150 },
    { name: "B社", price: 120 },
    { name: "C社", price: 100 },
    { name: "D社", price: 180 },
    { name: "E社", price: 160 },
    { name: "弊社関連", price: 30 },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          不用品を資源へ。<br />
          暮らしと環境を守る不用品回収サービス
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          家具・家電・ごみ屋敷・遺品整理・オフィス撤去など、
          <br />
          どんな不用品も破格でスピーディーに解決します。
        </p>
<a href={lineUrl} target="_blank" rel="noopener noreferrer">
  <Button
    size="lg"
    className="rounded-2xl shadow-lg bg-green-800 text-white font-bold hover:bg-green-900"
  >
    LINEで無料見積もりする
  </Button>
</a>
      </section>

      {/* 時代背景 */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">時代背景</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <Recycle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">環境意識の高まり</h3>
              <p>
                廃棄ではなく資源化することが求められる時代。
                持続可能な社会への貢献。
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <LineChart className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">
                高齢化・リユース需要
              </h3>
              <p>
                片付けが難しい方や、物価高騰でリユースを望む方が増加。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          サービス内容
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          ご家庭から法人様まで、あらゆる不用品・残置物の回収・片付け・買取に対応。
          状況に応じた最適なプランをご提案いたします。
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "個人向け",
              desc: "ご家庭の不用品・粗大ごみ・遺品整理など幅広く対応。",
            },
            {
              title: "法人・店舗向け",
              desc: "オフィス家具、厨房機器、店舗撤去など業務用も対応。",
            },
            {
              title: "買取サービス",
              desc: "再販可能な家電や家具を丁寧に査定し、高価買取も実施。",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 特徴・強み */}
      <section className="bg-white py-16 px-6 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          選ばれる理由
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-lg">
          {[
            {
              title: "スピード対応",
              desc: "最短即日で訪問可能。急なご依頼やお引越し前日でも迅速に対応します。",
            },
            {
              title: "コストパフォーマンス",
              desc: "同業他社と比べて最大1/10の価格差も。コストを抑えて高品質な作業を実現。",
            },
            {
              title: "プロフェッショナル対応",
              desc: "1000件以上の実績を持つ専門スタッフが、丁寧・安心・確実に対応します。",
            },
            {
              title: "幅広いサービス網",
              desc: "軽トラ〜トン車、夜間作業や特殊案件もご相談ください。一都三県＋全国対応可。",
            },
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle className="text-green-600 w-8 h-8 mr-4 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-1 text-gray-800">
                  {feat.title}
                </h3>
                <p className="text-gray-700">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3ステップ */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-700">
          簡単3ステップで完了！
        </h2>
        <p className="text-lg mb-10 text-gray-700">
          スマホひとつで簡単依頼！面倒な手続き不要でスピーディーに解決。
        </p>
        <img
          src="/images/3steps.png"
          alt="不用品回収の3ステップ（撮影→情報共有→作業完了）"
          className="mx-auto rounded-2xl shadow-md max-w-4xl w-full h-auto"
        />
      </section>

      {/* Before & After */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Before & After — 見違える変化！
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              src: "/images/before_after_house.png",
              alt: "戸建ての不用品回収のBefore After",
            },
            {
              src: "/images/before_after_office.png",
              alt: "オフィス撤去のBefore After",
            },
            {
              src: "/images/before_after_restaurant.png",
              alt: "飲食店撤去のBefore After",
            },
          ].map((img, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-2">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 他社比較 */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">他社との比較</h2>
        <div className="max-w-3xl mx-auto" style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="price"
                radius={[6, 6, 0, 0]}
                name="料金（万円）"
                label={{ position: "top", fill: "#555" }}
              >
                {data.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.name === "弊社関連" ? "#f97316" : "#22c55e"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">不用品でお困りですか？</h2>
        <p className="mb-6">
          LINEやお電話でお気軽にご相談ください。
          一都三県を中心に、法人・個人問わず全国対応可能です。
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
<a href={lineUrl} target="_blank" rel="noopener noreferrer">
  <Button
    size="lg"
    className="rounded-2xl shadow-lg bg-green-300 hover:bg-green-400 text-green-900 font-bold transition-all duration-200"
  >
    LINEで無料見積もりする
  </Button>
</a>
          <Button
            size="lg"
            className="rounded-2xl shadow-lg border border-white bg-transparent text-white hover:bg-green-600 transition-all duration-200"
          >
            <Phone className="inline w-5 h-5 mr-2" /> お電話で相談する
          </Button>
        </div>
      </section>
    </div>
  );
}

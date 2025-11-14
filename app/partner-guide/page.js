"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Coins, FileText, ClipboardList, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerRecruitLP() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          営業パートナー募集<br />便利屋相談所と一緒に成長しませんか？
        </motion.h1>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          副業でも本業でもOK！資料を見せて紹介するだけ。<br />
          成果報酬10%バックで、自由に稼げる仕組みです。
        </p>

        <Button
          size="lg"
          className="rounded-2xl shadow-lg bg-green-600 hover:bg-green-700 text-white font-bold"
          onClick={() =>
            window.open("https://forms.gle/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs", "_blank")
          }
        >
          今すぐ参加登録する
        </Button>
      </section>

      {/* メリット */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-700">この仕事のメリット</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />, title: "誰でも始められる", text: "ノルマなし。法人・個人どちらも提案可能で、未経験でも大丈夫。" },
            { icon: <Coins className="w-12 h-12 text-green-600 mx-auto mb-4" />, title: "成果報酬10%", text: "売上10万円で1万円バック。紹介先がリピート成約した場合も10％対象。" },
            { icon: <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />, title: "資料完備", text: "LP・PDF・営業カードを提供。営業初心者でも提案しやすい環境。" },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md border-green-200">
              <CardContent className="p-6 text-center">
                {item.icon}
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 活動の流れ */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-700">活動の流れ</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            { title: "STEP1 登録", text: "Googleフォームにて氏名・連絡先・口座情報を入力。契約書もオンラインで締結。", link: "https://forms.gle/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs", button: "登録フォームを開く" },
            { title: "STEP2 紹介", text: "顧客へ資料を提示して案内。案件は専用フォームから登録。", link: "https://forms.gle/1VT-XVhYMMIf5qxL3litrA9ODI3t_nZxqtrnqxsdAGm8", button: "案件登録フォーム" },
            { title: "STEP3 報酬受取", text: "売上確定後、翌月末に口座へ報酬振込（1万円以上の案件から対象）。", icon: <ClipboardList className="w-10 h-10 text-green-600 mx-auto mt-4" /> },
          ].map((step, i) => (
            <Card key={i} className="shadow-lg rounded-2xl border-t-4 border-green-500">
              <CardContent className="p-10">
                <h3 className="font-semibold text-2xl mb-3 text-green-600">{step.title}</h3>
                <p>{step.text}</p>
                {step.link && (
                  <Button
                    size="sm"
                    className="mt-4 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(step.link, "_blank")}
                  >
                    {step.button}
                  </Button>
                )}
                {step.icon}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* A6カード表面 */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">営業カード（A6サイズ）</h2>
        <div className="bg-gradient-to-b from-green-700 to-green-500 text-white rounded-[24px] shadow-2xl p-4 mx-auto border border-green-800 max-w-[380px] h-[600px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">便利屋相談所</h3>
            <p className="text-sm mb-3">
              ご家庭・店舗・オフィス・不動産・工場など<br />どんな状況でもまるごと対応します！
            </p>

<p className="font-semibold mb-2 text-white">ビフォーアフター</p>
<div className="space-y-3 mb-4">
  {/* ビフォーアフター横長画像：枠内でトリミングしつつ中央寄せ */}
  <div className="w-full h-40 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
    <img
      src="/before-after.png"
      alt="ビフォーアフター"
      className="object-contain w-full h-full"
    />
  </div>

  {/* 軽トラ素材画像2枚：高さ・比率を統一して左右整列 */}
  <div className="grid grid-cols-2 gap-3">
    <div className="rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
      <img
        src="/sozai1.jpg"
        alt="軽トラ積載1"
        className="object-cover w-full h-32"
      />
    </div>
    <div className="rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
      <img
        src="/sozai2.jpg"
        alt="軽トラ積載2"
        className="object-cover w-full h-32"
      />
    </div>
  </div>
</div>


            <p className="text-sm mb-3 font-semibold">これだけ積んで平均5万円前後の実績あり！</p>
          </div>

          <div>
            <img src="https://qr-official.line.me/gs/M_487njiqf_GW.png?oat_content=qr" alt="LINE QRコード" className="w-20 mx-auto mb-2 rounded-lg border border-white" />
    
          </div>
        </div>
      </section>

      {/* A6カード裏面 */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="mx-auto bg-white border rounded-[24px] shadow-2xl p-6 max-w-[380px] h-[600px]">
          <h3 className="text-2xl font-bold text-green-700 mb-4">便利屋相談所とは？</h3>
          <p className="text-gray-700 text-sm mb-6">
            不用品回収・引っ越し・ハウスクリーニング・伐採・草刈り・家屋解体・リフォーム・不動産コンサルなど、
            一都三県を中心に幅広いサービスを提供しています。
          </p>

          <ul className="text-left text-gray-700 text-sm space-y-2 mb-6">
            <li>・リピート発生時も10％報酬</li>
            <li>・しつこい営業なし・見積り無料</li>
            <li>・ブランド買取／厨房機器撤去なども対応</li>
            <li>・残置物、遺品整理、事故物件にも対応</li>
          </ul>

<div className="border-t pt-4 text-left text-sm text-gray-600 space-y-2">
  <p>紹介者名：＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
  <p>連絡先電話番号：＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
  <div className="pt-4 text-xs text-gray-500 leading-tight">
    <p>LINE ID：@487njiqf</p>
    <p>
      URL：
      <a
        href="https://lin.ee/tSd3kxT"
        target="_blank"
        className="underline text-green-700 break-all"
      >
        https://lin.ee/tSd3kxT
      </a>
    </p>
  </div>
</div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">副業・本業問わず活躍できる！</h2>
        <p className="mb-6">あなたの紹介が、社会と環境を助ける第一歩になります。</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-2xl shadow-lg bg-green-600 hover:bg-green-700 text-white font-bold"
            onClick={() => window.open("https://forms.gle/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs", "_blank")}
          >
            今すぐ参加登録する
          </Button>

          <Button
            size="lg"
            className="rounded-2xl shadow-lg bg-green-600 hover:bg-green-700 text-white font-bold flex items-center gap-2"
            onClick={() => window.open("https://example.com/download", "_blank")}
          >
            <Download className="w-5 h-5" /> 資料をダウンロード
          </Button>
        </div>
      </section>
    </div>
  );
}

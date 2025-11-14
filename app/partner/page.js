"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Coins, FileText, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerRecruitLP() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          営業パートナー募集<br />
          便利屋相談所と一緒に成長しませんか？
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          副業でも本業でもOK！資料を見せて紹介するだけ。<br />
          成果報酬10%バックで、自由に稼げる仕組みです。
        </p>
        <Button
          size="lg"
          className="rounded-2xl shadow-lg bg-blue-600 text-white font-bold hover:bg-blue-800 transition-all duration-200"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs/viewform",
              "_blank"
            )
          }
        >
          今すぐ参加登録する
        </Button>
      </section>

      {/* メリット */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">この仕事のメリット</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">誰でも始められる</h3>
              <p>ノルマなし。法人・個人どちらも提案可能で、未経験でも大丈夫。</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <Coins className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">成果報酬10%</h3>
              <p>残置物撤去案件に対して、売上の10%を紹介バック。その他案件は要相談。</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">資料完備</h3>
              <p>提案に必要なLP・PDFを提供。紹介するだけでOK。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 活動の流れ */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">活動の流れ</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <Card className="shadow-lg rounded-2xl border-t-4 border-blue-500">
            <CardContent className="p-10">
              <h3 className="font-semibold text-2xl mb-3 text-blue-600">STEP1 登録</h3>
              <p>Googleフォームにて氏名・連絡先・口座情報を入力。契約書もオンラインで締結。</p>
              <Button
                size="sm"
                className="mt-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs/viewform",
                    "_blank"
                  )
                }
              >
                登録フォームを開く
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl border-t-4 border-blue-500">
            <CardContent className="p-10">
              <h3 className="font-semibold text-2xl mb-3 text-blue-600">STEP2 紹介</h3>
              <p>顧客へ資料を提示して案内。案件は専用フォームから登録。</p>
              <Button
                size="sm"
                className="mt-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1VT-XVhYMMIf5qxL3litrA9ODI3t_nZxqtrnqxsdAGm8/viewform",
                    "_blank"
                  )
                }
              >
                案件登録フォーム
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-2xl border-t-4 border-blue-500">
            <CardContent className="p-10">
              <h3 className="font-semibold text-2xl mb-3 text-blue-600">STEP3 報酬受取</h3>
              <p>売上確定後、翌月末に口座へ報酬振込（1万円以上の案件から対象）。</p>
              <ClipboardList className="w-10 h-10 text-blue-600 mx-auto mt-4" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-12 px-6 text-center text-gray-600 bg-gray-100 border-t">
        <p className="font-semibold mb-1">株式会社金座</p>
        <p className="mb-1">所在地：東京都中央区銀座7-15-7</p>
        <p>代表取締役：陶山 恵一朗</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">副業・本業問わず活躍できる！</h2>
        <p className="mb-6">あなたの紹介が、社会と環境を助ける第一歩になります。</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* ← ボタンも青系に統一 */}
          <Button
            size="lg"
            className="rounded-2xl shadow-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all duration-200"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/1HA9tNXhokaxpQ2JhuiaYriA7h8f3TvTPN8DGL8uXHxs/viewform",
                "_blank"
              )
            }
          >
            今すぐ参加登録する
          </Button>

          <Button
            size="lg"
            className="rounded-2xl shadow-lg bg-transparent border border-white text-white hover:bg-blue-600 transition-all duration-200"
            onClick={() => window.open("/docs/partner-guide.pdf", "_blank")}
          >
            詳細資料をダウンロード
          </Button>
        </div>
      </section>
    </div>
  );
}

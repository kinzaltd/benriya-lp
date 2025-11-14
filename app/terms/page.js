export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8 text-center">利用規約</h1>
      <p className="mb-4">
        本規約は、株式会社金座（以下「当社」）が運営する「便利屋相談所」のサービスに適用されます。
        利用者は、本規約に同意のうえサービスを利用するものとします。
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">第1条（サービス内容）</h2>
      <p>
        当社は、不用品回収・遺品整理・引越し・ハウスクリーニング・伐採・リフォーム・不動産コンサルティング・ブランド買取などのサービスを提供します。
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">第2条（禁止事項）</h2>
      <ul className="list-disc ml-6">
        <li>虚偽の情報提供</li>
        <li>法令・公序良俗に反する行為</li>
        <li>第三者の権利・信用を侵害する行為</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">第3条（免責事項）</h2>
      <p>
        当社は通信障害・天災・不可抗力などにより発生した損害について一切の責任を負いません。
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">第4条（報酬）</h2>
      <p>
        営業パートナー制度の報酬は、不用品回収案件に限り売上金額（税抜）の10%とします。
        ただし、解体・引越し・クリーニング等の案件は別途協議の上定めます。
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">第5条（準拠法・管轄）</h2>
      <p>
        本規約は日本法に準拠し、紛争は東京地方裁判所を専属的合意管轄とします。
      </p>
    </div>
  );
}

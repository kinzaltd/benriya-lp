export default function PolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8 text-center">プライバシーポリシー</h1>

      <p className="mb-4">
        株式会社金座（以下「当社」）は、便利屋相談所において取得した個人情報を適切に管理し、以下の方針に基づいて取り扱います。
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. 事業者情報</h2>
      <p>株式会社金座（東京都中央区銀座7-15-7）<br />代表取締役 陶山 恵一朗</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. 取得する情報</h2>
      <ul className="list-disc ml-6">
        <li>氏名、住所、メールアドレス、LINEアカウント情報</li>
        <li>お問い合わせ内容、案件登録情報</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. 利用目的</h2>
      <p>サービス提供、見積もり対応、報酬支払い、連絡対応のために利用します。</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. 第三者提供</h2>
      <p>法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. 管理体制</h2>
      <p>個人情報の漏洩防止等の安全管理措置を講じ、社員教育を徹底します。</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. お問い合わせ</h2>
      <p>
        お問い合わせは公式LINE
        <a href="https://lin.ee/tSd3kxT" className="text-green-700 underline ml-1">
          @487njiqf
        </a>
        までお願いいたします。
      </p>
    </div>
  );
}

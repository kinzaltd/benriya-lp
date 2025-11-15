import "./benriya.css"; // ← 好きな名前にしてOK

export const metadata = {
  title: "便利屋コンシェルジュ｜不用品回収・遺品整理・引っ越し",
  description:
    "富裕層にも選ばれる丁寧で清潔な不用品回収・遺品整理・引っ越しサービス。一都三県中心に即日対応。見積り無料。",
};

export default function BenriyaPage() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="wrap header-inner">
          <div className="logo-block">
            <small>富裕層にも支持される便利屋</small>
            <strong>便利屋コンシェルジュ</strong>
          </div>
          <nav className="header-nav">
            <a href="#services">サービス</a>
            <a href="#features">特徴</a>
            <a href="#flow">ご利用の流れ</a>
            <a href="#before-after">実績</a>
            <a href="#voice">お客様の声</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
          <a href="tel:0120996134" className="header-phone">
            📞 0120-996-134
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <small>一都三県 即日対応</small>
            <h1>
              富裕層にも選ばれる、
              <br />
              丁寧で清潔な
              <br />
              不用品回収・遺品整理サービス
            </h1>
            <p className="lead">
              急な片付けやお引っ越し、大量の処分品でお困りの方へ。
              <br />
              経験豊富なスタッフが、買取から処分・運搬までワンストップでサポートいたします。
            </p>
            <div className="hero-buttons">
              <a href="tel:0120996134" className="btn-primary">
                今すぐ相談（無料）
              </a>
              <a href="#contact" className="btn-secondary">
                お問い合わせ・見積り
              </a>
            </div>
            <p className="hero-note">
              事前にご連絡いただければ、夜間やお忙しい時間帯の対応もご相談可能です。
            </p>
          </div>
          <div className="hero-visual">
            <img
              src="/images/hero-main.jpg"
              alt="玄関前で笑顔で対応する清潔感のあるスタッフ"
            />
          </div>
        </div>
      </section>

      {/* 主なサービス */}
      <section className="section" id="services">
        <h2>主なサービス</h2>

        <div className="services-grid">
          <article className="service-card">
            <img
              src="/images/service-fuyohin.jpg"
              alt="不用品回収を行うスタッフ"
            />
            <div className="service-body">
              <h3 className="service-title">不用品回収・買取</h3>
              <p className="service-text">
                家具・家電・粗大ごみから店舗什器まで、どんな不用品も丁寧に回収。状態の良いものは査定・買取し、処分費用の削減もご提案します。
              </p>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/service-ihin.jpg"
              alt="遺品整理を丁寧に行うスタッフ"
            />
            <div className="service-body">
              <h3 className="service-title">遺品整理・生前整理</h3>
              <p className="service-text">
                ご遺族のお気持ちに寄り添いながら、仕分け・梱包・搬出まで一貫して対応。貴重品の探索や買取のご相談も承ります。
              </p>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/service-hikkoshi.jpg"
              alt="ダンボールを運ぶ引っ越しスタッフ"
            />
            <div className="service-body">
              <h3 className="service-title">引っ越しサービス</h3>
              <p className="service-text">
                単身のお引っ越しからご家族・オフィス移転まで。梱包・運搬・不要品の同時回収で、スムーズなお引っ越しを実現します。
              </p>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/service-clean.jpg"
              alt="キッチンを清掃するスタッフ"
            />
            <div className="service-body">
              <h3 className="service-title">ハウスクリーニング</h3>
              <p className="service-text">
                キッチン・浴室・水まわり・空室クリーニングなど、プロの技術で徹底洗浄。高級マンションや戸建ての実績も多数ございます。
              </p>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/service-tree.jpg"
              alt="庭木を伐採している作業員"
            />
            <div className="service-body">
              <h3 className="service-title">伐採・草刈り</h3>
              <p className="service-text">
                伸びすぎた庭木や雑草の伐採・草刈りにも対応。安全第一で作業し、すっきりとしたお庭づくりをお手伝いいたします。
              </p>
            </div>
          </article>

          <article className="service-card">
            <img
              src="/images/service-reform.jpg"
              alt="室内でリフォーム作業を行うスタッフ"
            />
            <div className="service-body">
              <h3 className="service-title">リフォーム・解体・店舗撤去</h3>
              <p className="service-text">
                部分的なリフォームから原状回復工事・解体、店舗や事務所の撤去まで、提携職人と連携したワンストップ対応が可能です。
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 私たちの強み */}
      <section id="features">
        <h2 className="section-title">私たちの強み</h2>
        <div className="features">
          <div className="feature-item">
            <strong>最短即日対応</strong>
            <p>
              急ぎの引越しや大量処分にも、スケジュールを調整して迅速に対応します。
            </p>
          </div>
          <div className="feature-item">
            <strong>軽トラ〜トン車対応</strong>
            <p>
              ワンルームのお片付けから工場・オフィスの大規模撤去まで、物量に応じて最適な車両を手配します。
            </p>
          </div>
          <div className="feature-item">
            <strong>解体・撤去までワンストップ</strong>
            <p>
              その場で分解・解体できるものは対応可能。提携職人と連携し、撤去から原状回復まで一括でお任せいただけます。
            </p>
          </div>
          <div className="feature-item">
            <strong>買取でコストダウン</strong>
            <p>
              まだ価値のある家具・家電・機材は査定・買取し、処分費用のトータルコストを抑えます。
            </p>
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="flow-section" id="flow">
        <div className="flow-inner">
          <h2
            style={{
              textAlign: "center",
              fontSize: "22px",
              color: "var(--navy)",
              margin: "0 0 28px",
            }}
          >
            ご利用の流れ
          </h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="flow-step-number">1</div>
              <h3>お問い合わせ・ご相談</h3>
              <p>
                お電話またはお問い合わせフォーム・LINEからご相談ください。おおまかな内容を伺い、概算の目安もお伝えします。
              </p>
            </div>
            <div className="flow-step">
              <div className="flow-step-number">2</div>
              <h3>現地訪問・お見積り</h3>
              <p>
                スタッフが現地を確認し、物量や作業内容に応じたお見積りをご提示。ご予算に合わせたご提案も可能です。
              </p>
            </div>
            <div className="flow-step">
              <div className="flow-step-number">3</div>
              <h3>作業当日</h3>
              <p>
                ご近隣への配慮を行いながら、丁寧かつスピーディーに作業。買取品がある場合はその場で査定いたします。
              </p>
            </div>
            <div className="flow-step">
              <div className="flow-step-number">4</div>
              <h3>ご精算・アフターフォロー</h3>
              <p>
                作業完了後に最終確認を行い、ご納得いただいてからご精算。追加の片付けや別日程のご依頼もお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section id="before-after">
        <h2>Before &amp; After</h2>
        <div className="before-after">
          {/* 不用品回収（部屋） */}
          <div>
            <h3>不用品回収 Before</h3>
            <img
              src="/images/before-recycle.jpg"
              alt="不用品が散らかった部屋"
            />
          </div>
          <div>
            <h3>不用品回収 After</h3>
            <img
              src="/images/after-recycle.jpg"
              alt="片付けられてきれいになった部屋"
            />
          </div>

          {/* 不用品回収（工場） */}
          <div>
            <h3>不用品回収 Before（工場）</h3>
            <img
              src="/images/before-fac-recycle.jpg"
              alt="不用品が散らかった工場"
            />
          </div>
          <div>
            <h3>不用品回収 After（工場）</h3>
            <img
              src="/images/after-fac-recycle.jpg"
              alt="片付けられてきれいになった工場"
            />
          </div>

          {/* ハウスクリーニング */}
          <div>
            <h3>ハウスクリーニング Before</h3>
            <img
              src="/images/before-clean.jpg"
              alt="汚れたキッチンやバスルーム"
            />
          </div>
          <div>
            <h3>ハウスクリーニング After</h3>
            <img
              src="/images/after-clean.jpg"
              alt="清潔でピカピカになったキッチンやバスルーム"
            />
          </div>

          {/* 庭木の伐採 */}
          <div>
            <h3>庭木の伐採 Before</h3>
            <img
              src="/images/before-tree.jpg"
              alt="手入れのされていない庭木"
            />
          </div>
          <div>
            <h3>庭木の伐採 After</h3>
            <img
              src="/images/after-tree.jpg"
              alt="綺麗に手入れされた庭木"
            />
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="voice-section" id="voice">
        <div className="voice-inner">
          <h2
            style={{
              textAlign: "center",
              fontSize: "22px",
              color: "var(--navy)",
              margin: "0 0 28px",
            }}
          >
            お客様の声
          </h2>

          <div className="voice-cards">
            <article className="voice-card">
              <div className="voice-head">
                <div className="voice-avatar">👩‍💼</div>
                <div>
                  <div className="voice-name">港区在住 40代 女性</div>
                  <div className="voice-meta">
                    不用品回収・ハウスクリーニング
                  </div>
                </div>
              </div>
              <div className="voice-rating">★★★★★</div>
              <p className="voice-text">
                マンションの片付けでお願いしました。スタッフさんの身だしなみや言葉遣いもとても丁寧で、管理人さんへの配慮までしていただき安心してお任せできました。
              </p>
            </article>

            <article className="voice-card">
              <div className="voice-head">
                <div className="voice-avatar">👨‍🏭</div>
                <div>
                  <div className="voice-name">工場経営 50代 男性</div>
                  <div className="voice-meta">工場内の残置物撤去</div>
                </div>
              </div>
              <div className="voice-rating">★★★★★</div>
              <p className="voice-text">
                急なレイアウト変更で大量の機材と不用品が出ましたが、スケジュールを合わせて一日で綺麗にしてもらえました。複数社と比較しましたが、提案内容と対応力で決めました。
              </p>
            </article>

            <article className="voice-card">
              <div className="voice-head">
                <div className="voice-avatar">👨‍👩‍👧</div>
                <div>
                  <div className="voice-name">世田谷区在住 30代 ご夫婦</div>
                  <div className="voice-meta">引っ越し＋買取</div>
                </div>
              </div>
              <div className="voice-rating">★★★★★</div>
              <p className="voice-text">
                引っ越しと不用品の回収をまとめてお願いしました。まだ使える家具を買取してもらえたので、想像していたより費用が抑えられて助かりました。またお願いしたいです。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <p>© 便利屋コンシェルジュ | 一都三県対応 | TEL: 0120-996-134</p>
      </footer>

      {/* 固定CTA */}
      <div className="cta-fixed">
        <a href="tel:0120996134">📞 電話する</a>
        <a href="https://line.me/R/ti/p/@yourlineid">💬 LINE相談</a>
        <a href="/contact.html">✉️ フォーム</a>
      </div>
    </>
  );
}

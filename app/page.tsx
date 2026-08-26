'use client';

import { useEffect, useState } from 'react';

const fit = [
  ['Hệ sinh thái giáo dục × Tư duy hệ thống', 'Em cấu trúc hành trình phức tạp giữa LMS, SIS, App và CRM thành các luồng rõ ràng cho Học sinh, Giáo viên, Phụ huynh và Quản trị viên.'],
  ['Đa nền tảng × Product craft', 'Em thiết kế sản phẩm Web và Mobile responsive theo quy trình end-to-end, từ xác định vấn đề, kiến trúc thông tin đến UI hoàn thiện và prototype.'],
  ['Design System × Tính nhất quán', 'Em xây dựng component, pattern và guideline có thể tái sử dụng, giúp sản phẩm duy trì chất lượng khi mở rộng về nền tảng, vai trò và trường học.'],
  ['Tín hiệu người dùng × Cải tiến', 'Em kết hợp nghiên cứu, usability testing và dữ liệu hành vi để kiểm chứng quyết định và liên tục cải tiến sản phẩm.'],
];

const experience = [
  ['2026 — HIỆN TẠI', 'UX/UI Designer · Feature Owner', 'MOBILE WORLD GROUP · PRECART', 'Phụ trách UX/UI end-to-end cho Thế Giới Di Động, Điện Máy Xanh và TopZone, từ yêu cầu, nghiên cứu đến triển khai và đo lường.'],
  ['2025 — 2026', 'UX/UI Designer', 'SOFTWORLD VIETNAM', 'Thiết kế sản phẩm HMI cảm ứng, thực hiện UX Research và phối hợp đa chức năng để đưa giải pháp vào vận hành.'],
  ['2023 — 2025', 'UX/UI Designer', 'LIVEN TECHNOLOGY', 'Thiết kế Web, Mobile và CRM responsive, tập trung vào accessibility, edge case và trải nghiệm nhất quán.'],
  ['2021 — 2025', 'Visual Designer', 'LIVEN TECHNOLOGY', 'Phát triển hệ thống nhận diện, chiến dịch truyền thông và thiết kế thị giác cho nhiều ngành hàng.'],
];

function RTInsights() {
  const canvas = [
    ['Customer segments', 'Học sinh, phụ huynh, người học chuyên môn; một phần B2B và đối tác.'],
    ['Value proposition', 'Giáo dục chất lượng cao + chương trình quốc tế + learning pathway.'],
    ['Channels', 'Trường học, website, admissions, digital platform và sự kiện.'],
    ['Customer relationship', 'Quan hệ dài hạn nhiều năm giữa school – student – parent.'],
    ['Revenue', 'Học phí, chương trình đào tạo, chương trình quốc tế, tư vấn và dịch vụ liên quan.'],
    ['Key activities', 'Giảng dạy, quản lý học thuật, tuyển sinh, đánh giá và giao tiếp phụ huynh.'],
    ['Key resources', 'Giáo viên, trường học, curriculum, accreditation, technology và brand.'],
    ['Key partners', 'Trường, đại học, tổ chức giáo dục và đối tác quốc tế.'],
    ['Cost structure', 'Nhân sự, cơ sở vật chất, curriculum/license, technology và marketing.'],
  ];

  return (
    <section className="rtPanel shell" id="rt-holdings" role="tabpanel" aria-label="Phân tích RT Holdings">
      <header className="rtHeader">
        <div><span>RT HOLDINGS / BUSINESS OVERVIEW</span><small>EDUCATION ECOSYSTEM · MULTI-BRAND HOLDING</small></div>
        <h2>Một hệ sinh thái giáo dục đa tầng, được thiết kế để đồng hành cùng người học qua nhiều giai đoạn.</h2>
        <p>RT Holdings sở hữu và vận hành nhiều thương hiệu giáo dục, sau đó mở rộng sang các dịch vụ liên quan để tăng giá trị vòng đời của học sinh và phụ huynh.</p>
      </header>

      <div className="rtStats">
        {[['20+','Đơn vị thành viên'],['30+','Chương trình đào tạo'],['9+','Cơ sở giáo dục tại TP.HCM'],['4','Quốc gia hiện diện'],['900+','Giáo viên & chuyên gia'],['500K+','Học sinh & học viên']].map((x)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}
      </div>

      <article className="rtChapter">
        <div className="rtChapterTitle"><span>01</span><h3>Core business: dịch vụ giáo dục</h3><p>Giáo dục là trung tâm; nguồn thu cốt lõi đến từ học phí, phí chương trình, đào tạo chuyên môn, chương trình quốc tế và dịch vụ liên quan.</p></div>
        <div className="educationMap">
          <div className="mapCore"><small>RT HOLDINGS</small><strong>Education<br/>Ecosystem</strong></div>
          {[['K–12 / School','WASS · PennSchool · SISS'],['Post-secondary','AmCollege'],['Professional training','IABM · TDA'],['Digital education','Online learning'],['International pathways','Study abroad · Languages']].map((x,i)=><div className="mapBranch" key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><small>{x[1]}</small></div>)}
        </div>
      </article>

      <article className="rtChapter lifecycleChapter">
        <div className="rtChapterTitle"><span>02</span><h3>Họ bán một learning lifecycle</h3><p>Thay vì chỉ tạo một transaction, hệ sinh thái có thể giữ một học sinh và gia đình trong nhiều năm — một mô hình hướng đến Customer Lifetime Value.</p></div>
        <div className="lifecycle" aria-label="Learning lifecycle">
          {['Acquire family','K–12','International program','Post-secondary','Study abroad','Professional training','Lifelong learning'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong>{i<6&&<b>→</b>}</div>)}
        </div>
        <div className="familyExample"><small>MỘT HÀNH TRÌNH ĐIỂN HÌNH</small><p>Con học WASS / PennSchool <b>→</b> tham gia chương trình quốc tế <b>→</b> tư vấn university <b>→</b> study abroad <b>→</b> chương trình chuyên môn.</p></div>
      </article>

      <article className="rtChapter">
        <div className="rtChapterTitle"><span>03</span><h3>Multi-brand ở phía trước.<br/>Shared capability ở phía sau.</h3><p>Mỗi thương hiệu phục vụ một nhu cầu, phân khúc và mức giá khác nhau; hệ thống phía sau vẫn có thể dùng chung năng lực vận hành.</p></div>
        <div className="brandSystem">
          <div><small>PORTFOLIO OF BRANDS</small><div className="brandCloud">{['WASS','PennSchool','SISS','AmCollege','IABM','TDA'].map(x=><span key={x}>{x}</span>)}</div></div>
          <div className="systemArrow">→</div>
          <div><small>SHARED CAPABILITIES</small><div className="capCloud">{['Technology','Admissions','CRM','Finance','HR','Academic operations','Marketing','Data','Infrastructure'].map(x=><span key={x}>{x}</span>)}</div></div>
        </div>
        <p className="rtInsight">Đây là lý do platform, internal system và centralized data trở nên đặc biệt quan trọng với RT Holdings.</p>
      </article>

      <article className="rtChapter internationalChapter">
        <div className="rtChapterTitle"><span>04</span><h3>Education + International Pathway</h3><p>Value proposition không chỉ là “đi học tại một trường”, mà là một hành trình học thuật quốc tế được kết nối từ trường học đến đại học và du học.</p></div>
        <div className="internationalGrid"><div><strong>100+</strong><span>Đối tác giáo dục & học thuật</span></div><div><strong>7+</strong><span>Lộ trình học tập quốc tế</span></div><div className="pathCard"><small>PARENT NEED</small><p>Môi trường quốc tế <b>→</b> School <b>→</b> International curriculum <b>→</b> Academic pathway <b>→</b> University / Study abroad</p></div></div>
      </article>

      <article className="rtChapter">
        <div className="rtChapterTitle"><span>05</span><h3>Business adjacency</h3><p>Education Ecosystem là core; Investment và Commerce & Services là các nhánh mở rộng hỗ trợ hệ sinh thái.</p></div>
        <div className="adjacency"><div className="coreAdj"><small>CORE</small><strong>Education</strong><p>K–12 · Training · Digital/Online · International pathways · Study abroad</p></div><div><small>ADJACENCY</small><strong>International Investment</strong><p>Cơ sở vật chất, văn phòng, quản lý tòa nhà, bất động sản và kết nối thị trường.</p></div><div><small>ADJACENCY</small><strong>Commerce & Services</strong><p>Thiết bị trường học, sản phẩm tiêu dùng, tư vấn du học và định cư.</p></div></div>
      </article>

      <article className="rtChapter canvasChapter">
        <div className="rtChapterTitle"><span>06</span><h3>Business Model Canvas</h3><p>Một góc nhìn cô đọng về cách hệ sinh thái tạo, phân phối và duy trì giá trị.</p></div>
        <div className="canvasGrid">{canvas.map((x,i)=><div key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><p>{x[1]}</p></div>)}</div>
      </article>

      <article className="uxCase">
        <div className="uxTitle"><span>07 / THE UX OPPORTUNITY</span><h3>Đây không còn là bài toán “thiết kế một website trường học”.</h3><p>Ở quy mô multi-school ecosystem, thiết kế phải kết nối nhiều vai trò, lớp dữ liệu và quy trình vận hành.</p></div>
        <div className="roleNetwork"><div className="schoolNode">SCHOOL<br/>ECOSYSTEM</div>{['Student','Teacher','Parent','Admin'].map(x=><div key={x}>{x}</div>)}</div>
        <div className="dataFlow"><small>DỮ LIỆU CẦN CHẠY XUYÊN SUỐT</small><div>{['Teacher','Attendance','Student record','Parent notification','Academic report','School administration'].map((x,i)=><span key={x}>{x}{i<5&&<b>→</b>}</span>)}</div></div>
        <div className="jdMatch"><small>JD × BUSINESS MODEL</small><p>Student / Teacher / Parent / Admin</p><strong>Attendance → Grade → Report → Parent communication → Content management</strong></div>
      </article>
    </section>
  );
}

function RTInsightsV2() {
  const bmc = [
    ['Customer segments', 'Học sinh · Phụ huynh · Người học chuyên môn · Đối tác B2B'],
    ['Value proposition', 'Giáo dục chất lượng cao · Chương trình quốc tế · Learning pathway'],
    ['Channels', 'Trường học · Website · Admissions · Digital platform · Events'],
    ['Relationship', 'Quan hệ dài hạn giữa School – Student – Parent'],
    ['Revenue', 'Học phí · Chương trình đào tạo · Tư vấn · Dịch vụ liên quan'],
    ['Key activities', 'Teaching · Academic management · Admissions · Assessment'],
    ['Key resources', 'Giáo viên · Trường học · Curriculum · Technology · Brand'],
    ['Key partners', 'Trường/Đại học · Tổ chức giáo dục · Đối tác quốc tế'],
    ['Cost structure', 'Nhân sự · Cơ sở vật chất · License · Technology · Marketing'],
  ];
  return (
    <section className="rt2 shell" id="rt-holdings" role="tabpanel" aria-label="Mô hình vận hành RT Holdings">
      <header className="rt2Hero">
        <span>RT HOLDINGS / SYSTEM VIEW</span>
        <h2>Education Ecosystem.<br/><em>Không chỉ là một trường học.</em></h2>
        <p>RT Holdings là một tập đoàn giáo dục đa thương hiệu: sở hữu nhiều điểm chạm trong hành trình học tập và dùng chung năng lực vận hành ở phía sau.</p>
      </header>

      <section className="rt2Section">
        <header className="rt2SectionHead"><span>01 / LEARNING LIFECYCLE</span><div><h3>Một gia đình.<br/>Nhiều năm trong ecosystem.</h3><p>Mô hình hướng đến Customer Lifetime Value: kết nối các giai đoạn thay vì chỉ tạo một giao dịch học phí.</p></div></header>
        <div className="journeyRail">{['Acquire family','K–12','International program','Post-secondary','Study abroad','Professional training','Lifelong learning'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div>
        <div className="journeyExample"><small>VÍ DỤ</small><p>WASS / PennSchool <b>→</b> chương trình quốc tế <b>→</b> tư vấn university <b>→</b> study abroad <b>→</b> chương trình chuyên môn.</p></div>
      </section>

      <section className="rt2Section">
        <header className="rt2SectionHead compactHead"><span>02 / BUSINESS MODEL CANVAS</span><div><h3>Business model, cô đọng trong 9 khối.</h3></div></header>
        <div className="bmcTable">{bmc.map((x,i)=><div key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><p>{x[1]}</p></div>)}</div>
      </section>

      <section className="rt2Ux">
        <header><span>03 / WHY THIS MATTERS FOR UX</span><h3>Complexity nằm ở mối quan hệ giữa người dùng, cấu trúc học thuật và dữ liệu.</h3></header>
        <div className="uxTree">
          <div className="uxRoot">SCHOOL ECOSYSTEM</div><div className="uxStem"/>
          <div className="uxRoles">{['Student','Teacher','Parent','Admin'].map(x=><div key={x}>{x}</div>)}</div>
          <div className="uxHierarchy">{['School','Program','Academic Year','Grade / Class','Subject'].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div>
        </div>
        <div className="uxDataFlow"><small>MỘT HÀNH ĐỘNG — NHIỀU HỆ QUẢ DỮ LIỆU</small><div>{['Teacher','Attendance','Student record','Parent notification','Academic report','School administration'].map(x=><span key={x}>{x}</span>)}</div></div>
        <div className="uxConclusion"><span>JD × BUSINESS LOGIC</span><p>Attendance <b>→</b> Grade <b>→</b> Report <b>→</b> Parent communication <b>→</b> Content management</p><strong>Đây là một system design problem, không chỉ là UI.</strong></div>
      </section>
    </section>
  );
}

const productRoles = [
  ['SIS', 'Quản trị viên / Giáo vụ', 'Quản lý hồ sơ, lớp học, điểm danh, ngoại lệ và dữ liệu toàn trường.'],
  ['LMS', 'Giáo viên', 'Quản lý lớp, điểm danh, giao bài, chấm điểm và phản hồi học tập.'],
  ['PORTAL', 'Phụ huynh', 'Theo dõi tình hình của con, nhận cảnh báo và trao đổi với nhà trường.'],
  ['PORTAL', 'Học sinh', 'Xem lịch học, bài tập, kết quả, chuyên cần và phản hồi từ giáo viên.'],
];

const productWorkflows = [
  ['Điểm danh và xử lý vắng học', 'Giáo viên ghi nhận → Giáo vụ kiểm tra → Phụ huynh xác nhận → Học sinh theo dõi'],
  ['Điểm số và kết quả học tập', 'Giáo viên nhập điểm → Hệ thống tổng hợp → Học sinh xem kết quả → Phụ huynh theo dõi'],
  ['Liên lạc nhà trường – phụ huynh', 'Phát hiện vấn đề → Gửi thông báo → Phụ huynh phản hồi → Nhà trường xử lý'],
  ['Quản trị nội dung học tập', 'Tạo nội dung → Phân loại → Phân phối → Theo dõi sử dụng → Cập nhật'],
];

function ProductIntroModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="productModal" role="dialog" aria-modal="true" aria-labelledby="product-intro-title">
      <button className="productModalBackdrop" type="button" aria-label="Đóng giới thiệu sản phẩm" onClick={onClose} />
      <article className="productModalPanel">
        <header className="productModalHero">
          <div>
            <span>RT EDUCATION ECOSYSTEM</span>
            <h2 id="product-intro-title">Một nghiệp vụ,<br />nhiều vai trò.</h2>
            <p>Một hệ sinh thái giáo dục được thiết kế xoay quanh sự phối hợp giữa nhà trường, giáo viên, phụ huynh và học sinh.</p>
          </div>
          <button className="productModalClose" type="button" aria-label="Đóng" onClick={onClose} autoFocus>×</button>
        </header>

        <div className="productModalContent">
          <section className="productProblem">
            <span>01 / BÀI TOÁN THIẾT KẾ</span>
            <div>
              <h3>Không chỉ thiết kế từng màn hình riêng lẻ.</h3>
              <p>RT Product mô phỏng cách dữ liệu và công việc được kết nối giữa SIS, LMS và các cổng thông tin. Ví dụ, một lần học sinh vắng mặt bắt đầu từ thao tác của giáo viên, tiếp tục qua giáo vụ, phụ huynh và kết thúc ở dữ liệu chuyên cần của học sinh.</p>
              <div className="attendanceFlow"><b>Giáo viên ghi nhận</b><i>→</i><b>Giáo vụ kiểm tra</b><i>→</i><b>Phụ huynh xác nhận</b><i>→</i><b>Học sinh theo dõi</b></div>
            </div>
          </section>

          <section>
            <header className="productModalSectionHead"><span>02 / BỐN NHÓM NGƯỜI DÙNG</span><p>Mỗi trải nghiệm được tổ chức theo công việc cần hoàn thành, quyền hạn và phạm vi dữ liệu.</p></header>
            <div className="productRoleGrid">{productRoles.map((item, index) => <article key={item[1]}><span>0{index + 1} · {item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div>
          </section>

          <section>
            <header className="productModalSectionHead"><span>03 / NGHIỆP VỤ TRỌNG TÂM</span><p>Cùng một dữ liệu được tạo, kiểm tra và sử dụng xuyên suốt nhiều sản phẩm.</p></header>
            <div className="productWorkflowList">{productWorkflows.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
          </section>

          <section>
            <header className="productModalSectionHead"><span>04 / NGUYÊN TẮC THIẾT KẾ</span><p>Tổ chức trải nghiệm để hệ thống rõ ràng với người dùng và khả thi khi triển khai.</p></header>
            <div className="productPrinciples">{[
              ['Role-based', 'Đúng thông tin và hành động cho từng vai trò.'],
              ['Action-oriented', 'Ưu tiên việc cần xử lý và bước tiếp theo.'],
              ['Connected data', 'Đồng bộ thay đổi giữa SIS, LMS và Portal.'],
              ['Exception-first', 'Làm nổi bật trường hợp bất thường.'],
              ['Scalable UI', 'Chuẩn hóa component, trạng thái và mẫu tương tác.'],
            ].map((item) => <article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>
          </section>

          <section className="productExploreGuide">
            <div><span>05 / CÁCH TRẢI NGHIỆM</span><h3>Chuyển đổi giữa bốn vai trò để quan sát cùng một nghiệp vụ dưới những góc nhìn khác nhau.</h3><p>Dữ liệu trong prototype là dữ liệu giả lập, được sử dụng để minh họa tư duy sản phẩm, cấu trúc thông tin và luồng phối hợp giữa các vai trò.</p></div>
            <button type="button" onClick={onClose}>Bắt đầu trải nghiệm <span>↓</span></button>
          </section>
        </div>
      </article>
    </div>
  );
}

function RTProductEmbed({ onOpenIntro }: { onOpenIntro: () => void }) {
  return (
    <section className="productPanel shell" id="rt-product" role="tabpanel" aria-label="RT Product">
      <header className="productHeader">
        <div>
          <span>RT PRODUCT / INTERACTIVE PROTOTYPE</span>
          <h2>Trải nghiệm sản phẩm ngay trong cover letter.</h2>
        </div>
        <div className="productHeaderAside">
          <p>Bản thiết kế LMS/SIS được nhúng trực tiếp để người xem có thể khám phá tư duy sản phẩm mà không rời khỏi hồ sơ.</p>
          <button type="button" onClick={onOpenIntro}>Giới thiệu sản phẩm <span>↗</span></button>
        </div>
      </header>
      <div className="productBrowser">
        <div className="productBrowserBar" aria-hidden="true">
          <div><i /><i /><i /></div>
          <span>EduSystem · Live Product Experience</span>
          <b>LIVE PRODUCT</b>
        </div>
        <iframe
          src="https://edusystem-smoky.vercel.app/"
          title="RT Holdings LMS/SIS Product"
          loading="lazy"
          allow="fullscreen"
          scrolling="yes"
          tabIndex={0}
        />
      </div>
    </section>
  );
}

export default function Home() {
  const [activePanel, setActivePanel] = useState<'cover' | 'rt' | 'product'>('cover');
  const [productIntroOpen, setProductIntroOpen] = useState(false);
  useEffect(() => {
    if (!productIntroOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setProductIntroOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [productIntroOpen]);
  const openProductDemo = () => {
    setActivePanel('product');
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById('rt-product')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top"><span>H.</span><small>ỨNG TUYỂN / RT HOLDINGS</small></a>
        <nav><a href="#fit">Năng lực phù hợp</a><a href="#experience">Kinh nghiệm</a><a href="#contact">Liên hệ</a></nav>
        <a className="talk" href="mailto:cpthanhhieu@gmail.com">Trao đổi cùng em ↗</a>
      </header>

      <section className="hero shell">
        <p className="eyebrow"><i /> THƯ ỨNG TUYỂN · SENIOR UX/UI DESIGNER · EDTECH</p>
        <div className="heroMain">
          <h1>Cù Phạm<br />Thành Hiếu</h1>
          <div className="heroIntro">
            <span>SENIOR UX/UI DESIGNER</span>
            <p>Thiết kế hệ thống phức tạp thành trải nghiệm rõ ràng, liền mạch và có thể mở rộng.</p>
          </div>
        </div>
        <div className="heroActions">
          <div className="heroContext">
            <div className="heroTabs" role="tablist" aria-label="Nội dung chính">
              <button className={activePanel==='cover'?'active':''} onClick={()=>setActivePanel('cover')} role="tab" aria-selected={activePanel==='cover'}>Cover Letter <span>↓</span></button>
              <button className={activePanel==='rt'?'active':''} onClick={()=>setActivePanel('rt')} role="tab" aria-selected={activePanel==='rt'}>RT Holdings <span>↓</span></button>
              <button className={activePanel==='product'?'active':''} onClick={()=>setActivePanel('product')} role="tab" aria-selected={activePanel==='product'}>RT Product <span>↓</span></button>
            </div>
          </div>
          <div className="heroPrimaryActions"><a className="button" href="https://cover-letter-dol-english-sandy.vercel.app/Cu-Pham-Thanh-Hieu-UIUX-Designer-CV.pdf" target="_blank">Xem CV ↗</a><a href="https://hieuu.webflow.io/" target="_blank">Portfolio ↗</a></div>
        </div>
      </section>

      {activePanel === 'cover' ? <section className="letter shell" id="cover-letter" role="tabpanel">
        <div className="letterLabel"><div>THƯ ỨNG TUYỂN<br /><span>RT HOLDINGS</span></div><small>SENIOR<br />UX/UI DESIGNER</small></div>
        <article className="letterBody">
          <div className="letterIntro">
            <p>Kính gửi Anh/Chị phụ trách tuyển dụng RT Holdings,</p>
            <h2>Em muốn góp phần biến một hệ sinh thái giáo dục phức tạp thành trải nghiệm nhất quán và dễ sử dụng.</h2>
            <p>Em tên là <strong>Cù Phạm Thành Hiếu</strong>, ứng tuyển vị trí <strong>Senior UX/UI Designer</strong> tại RT Holdings.</p>
          </div>

          <div className="letterSection">
            <span className="textIndex">01 / ĐIỂM EM QUAN TÂM</span>
            <p>RT Holdings đang giải một bài toán sản phẩm có quy mô lớn: <strong>LMS, SIS, Mobile App và CRM</strong> cần vận hành liền mạch giữa nhiều trường học, dịch vụ và nhóm người dùng. Đây không chỉ là bài toán giao diện, mà còn là việc chuyển hóa sự phức tạp trong vận hành thành trải nghiệm rõ ràng, kết nối và đáng tin cậy cho học sinh, giáo viên, phụ huynh và quản trị viên.</p>
          </div>

          <div className="letterSection">
            <span className="textIndex">02 / NĂNG LỰC PHÙ HỢP TRỰC TIẾP</span>
            <div className="capabilityNarrative">
              <p>Em nghĩ mình phù hợp vì vị trí này cần một người vừa hiểu sâu về UX cho hệ thống nhiều vai trò người dùng, vừa có khả năng làm việc chặt với Developer để thiết kế khả thi khi triển khai — đây đúng là những gì em đã làm qua các dự án gần đây.</p>
            </div>
            <ol className="capabilityEvidence">
              <li>
                <header><span>01</span><div><strong>Đa vai trò người dùng / nghiệp vụ phức tạp</strong><small>THEGIOIDIDONG.COM</small></div></header>
                <p>Làm việc trên hệ thống có nhiều nhóm người dùng với hành vi khác nhau — tương tự bài toán học sinh, giáo viên, phụ huynh và quản trị viên tại RT Holdings. Em quen với việc xây dựng user flow cho nghiệp vụ nhiều bước, cân bằng giữa nhu cầu từng nhóm và tính nhất quán của hệ thống chung.</p>
              </li>
              <li>
                <header><span>02</span><div><strong>Design System / phối hợp Developer</strong><small>SOFTWORLD VIETNAM · FIGMA MCP</small></div></header>
                <p>Em đã thiết kế UI cho robot tương tác và xây dựng Design System dùng chung, đảm bảo tính nhất quán khi triển khai. Nền tảng front-end cơ bản cùng kinh nghiệm làm việc trực tiếp với cấu trúc component qua Figma MCP giúp thiết kế của em khả thi ngay từ đầu và hạn chế việc phải chỉnh sửa lại khi bàn giao.</p>
              </li>
              <li>
                <header><span>03</span><div><strong>AI-assisted workflow</strong><small>CLAUDE · FIGMA MCP · AI CODING TOOLS</small></div></header>
                <p>Em tích cực dùng AI trong quy trình thiết kế — từ Claude và Figma MCP để thao tác trực tiếp với file thiết kế, đến AI coding tools để dựng prototype tương tác nhanh hơn, qua đó rút ngắn khoảng cách giữa design và code.</p>
              </li>
            </ol>
          </div>

          <div className="letterClosing">
            <p>Tại RT Holdings, em mong muốn đóng góp không chỉ ở việc tạo ra giao diện chỉn chu, mà còn cùng team định hình cách một hệ sinh thái giáo dục phức tạp trở nên nhất quán, hữu ích và thực sự dễ sử dụng.</p>
            <p>Em rất mong có cơ hội trao đổi về những bài toán sản phẩm mà đội ngũ đang giải quyết.</p>
            <p>Xin cảm ơn Anh/Chị đã dành thời gian xem xét hồ sơ.<br /><br />Trân trọng,<br /><strong>Cù Phạm Thành Hiếu</strong></p>
          </div>
        </article>
      </section> : activePanel === 'rt' ? <RTInsightsV2 /> : <RTProductEmbed onOpenIntro={() => setProductIntroOpen(true)} />}

      <section className="fit" id="fit"><div className="shell"><div className="sectionTitle"><span>01 / WHY RT × WHY ME</span><p>RT Holdings xây dựng một hệ sinh thái giáo dục kết nối. Em thiết kế theo cùng nguyên tắc: hiểu toàn bộ hệ thống, làm rõ hành trình, kiểm chứng rồi cải tiến.</p></div><div className="fitGrid">{fit.map((x, i) => <article key={x[0]}><span>0{i + 1}</span><h3>{x[0]}</h3><p>{x[1]}</p><button className="fitProductLink" type="button" onClick={openProductDemo}>Trải nghiệm live demo <b>→</b></button></article>)}</div></div></section>
      <section className="experience shell" id="experience"><div className="sectionTitle"><span>02 / KINH NGHIỆM</span><p>Kinh nghiệm trong thương mại điện tử có lưu lượng lớn, công cụ doanh nghiệp và sản phẩm đa nền tảng.</p></div><div className="timeline">{experience.map((x) => <article key={x[0]}><time>{x[0]}</time><div><h3>{x[1]}</h3><strong>{x[2]}</strong><p>{x[3]}</p></div></article>)}</div></section>
      <footer id="contact"><div className="shell"><p>03 / CÙNG XÂY DỰNG TRẢI NGHIỆM GIÁO DỤC KẾT NỐI</p><a className="email" href="mailto:cpthanhhieu@gmail.com">cpthanhhieu@gmail.com <span>↗</span></a><div className="contacts"><a href="tel:+84935522285">093 552 2285</a><a href="https://www.linkedin.com/in/hieuu/" target="_blank">LinkedIn ↗</a><a href="https://hieuu.webflow.io/" target="_blank">Portfolio ↗</a></div><div className="footerNav"><b>H.</b><div><a href="#top">Đầu trang ↑</a><a href="https://hieuu.webflow.io/" target="_blank">Portfolio ↗</a><a href="https://hieuu.webflow.io/project/sim-dmx" target="_blank">SIM DMX ↗</a></div></div></div></footer>
      {productIntroOpen && <ProductIntroModal onClose={() => setProductIntroOpen(false)} />}
    </main>
  );
}

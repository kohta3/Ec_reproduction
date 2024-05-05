import React from 'react';
const ContactFormSection = () => {

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
      <div className="container mt-5">
        <h2 className="mb-4">お問い合わせフォーム</h2>
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">名前</label>
                <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">アドレス</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label for="inquiry" className="form-label">問い合わせの内容</label>
                <select className="form-select" id="inquiry" required>
                    <option selected disabled value="">選択してください</option>
                    <option value="product">商品について</option>
                    <option value="service">サービスについて</option>
                    <option value="other">その他</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="details" className="form-label">問い合わせ詳細</label>
                <textarea className="form-control" id="details" rows="4" required></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" style={{width:"fitContent"}} id="privacy" required />
                <label className="form-check-label" for="privacy">個人情報の取り扱いに同意する</label>
            </div>
            <button type="submit" className="btn btn-primary">送信</button>
        </form>
    </div>
  );
};

export default ContactFormSection;

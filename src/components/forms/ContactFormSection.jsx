
import { useState, useEffect } from 'react';
import React from 'react';
const ContactFormSection = () => {

    const [fullName, setFullName] = useState(false);
    const [email, setEmail] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [type, setType] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [about, setAbout] = useState(false);
    const [allow, setAllow] = useState(false);

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const confirmEmail = (confirm) => {
        const getElementByEmail = document.getElementById('email').value;
        return getElementByEmail === confirm;
    }

    const isEmpty = (text) => {
        return text.trim().length > 0;
    }

    function handleFullName(event) {
        setFullName(isEmpty(event.target.value));
    }

    const handleEmail = (event) => {
        setEmail(isValidEmail(event.target.value));
    }

    const handleConfirm = (event) => {
        setConfirm(confirmEmail(event.target.value));
    }

    const handleType = (event) => {
        setType(isEmpty(event.target.value));
        setSelectedType(event.target.value);
    }

    const handleAbout = (event) => {
        setAbout(isEmpty(event.target.value));
    }

    const handleAllow = (bool) => {        
        setAllow(bool.target.checked);
    }

    useEffect(() => {
        const submitBtn = document.getElementById('submit');
        if (fullName&&email&&confirm&&type&&about&&allow) {
            submitBtn.disabled = false;
        }else{
            submitBtn.disabled = true;
        }
    }, [fullName,email,confirm,type,about,allow]);


    const sendContact = async (e) => {
        e.preventDefault();

        if (!fullName || !isValidEmail(email) || !confirmEmail(confirm) || !selectedType || !about || !allow) {
            alert('フォームの入力を確認してください。');
            return;
        }

        const formData = new FormData();
        formData.append('name', fullName);
        formData.append('email', email);
        formData.append('inquiry', selectedType);
        formData.append('details', about);
        formData.append('allowed', allow);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwwqvPJFhr85pLBVyNEYZkd8OBl9i_qFFB1NPaEHamRnvFlcrCgD8xexJMD_C3RNdYa/exec', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();  // または .json() など、レスポンスの形式に応じて
            console.log(result);
            alert('送信が完了しました。');
        } catch (error) {
            console.error('送信エラー:', error);
            alert('送信に失敗しました。');
        }
    }


    return (
        <div className="container mt-1">
            <h2 className="w-100 mb-5" style={{ textAlign: "center" }}>Contact</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">お名前<em className='inputNeed'>必須</em></label>
                    <input type="text" className={"form-control" + (fullName?" border-success ":" border-danger ")} id="name" name='name' required onChange={(e) => { handleFullName(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">メールアドレス<em className='inputNeed'>必須</em></label>
                    <input type="email" className={"form-control" + (email?" border-success ":" border-danger ")} id="email" name="email" required onChange={(e) => { handleEmail(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm" className="form-label">確認メールアドレス<em className='inputNeed'>必須</em></label>
                    <input type="email" className={"form-control" + (confirm?" border-success ":" border-danger ")} id="confirm" required onChange={(e) => { handleConfirm(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inquiry" className="form-label">お問い合わせフォーム<em className='inputNeed'>必須</em></label>
                    <select value={selectedType} className={"form-select" + (type?" border-success ":" border-danger ")} id="inquiry" name="inquiry" required onChange={(e) => { handleType(e) }}>
                        <option defaultValue disabled value="">選択してください</option>
                        <option value="product">商品について</option>
                        <option value="service">サービスについて</option>
                        <option value="other">その他</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">お問い合わせ<em className='inputNeed'>必須</em></label>
                    <textarea className={"form-control" + (about?" border-success ":" border-danger ")} id="details" name="details" rows="4" required onChange={(e) => { handleAbout(e) }}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-check-label" htmlFor="allowed" style={{ width: "auto" }}>
                        <input type="checkbox" className={(allow?" border-success ":" border-danger ")} id="allowed" name="allowed" style={{ marginRight: "10px" }} required checked={allow} onChange={handleAllow} />個人情報の取り扱いに同意する<em className='inputNeed'>必須</em>
                    </label>
                </div>
                <button type="submit" className="btn btn-dark w-100" id='submit' disabled onClick={(e)=>{sendContact(e)}}>送信</button>
            </form>
        </div>
    );
};

export default ContactFormSection;

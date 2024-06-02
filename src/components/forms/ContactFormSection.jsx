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
    const [flashMessage, setFlashMessage] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const confirmEmail = (confirm) => {
        const getElementByEmail = document.getElementById('email').value;
        return getElementByEmail === confirm;
    };

    const isEmpty = (text) => {
        return text.trim().length > 0;
    };

    function handleFullName(event) {
        setFullName(isEmpty(event.target.value));
    }

    const handleEmail = (event) => {
        setEmail(isValidEmail(event.target.value));
    };

    const handleConfirm = (event) => {
        setConfirm(confirmEmail(event.target.value));
    };

    const handleType = (event) => {
        setType(isEmpty(event.target.value));
        setSelectedType(event.target.value);
    };

    const handleAbout = (event) => {
        setAbout(isEmpty(event.target.value));
    };

    const handleAllow = (bool) => {        
        setAllow(bool.target.checked);
    };

    useEffect(() => {
        const submitBtn = document.getElementById('submit');
        if (fullName && email && confirm && type && about && allow) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }, [fullName, email, confirm, type, about, allow]);

    useEffect(() => {
        if (flashMessage.message) {
            const timer = setTimeout(() => {
                setFlashMessage({ message: '', type: '' });
                window.location.reload();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    const sendContact = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('inquiry', selectedType);
        formData.append('details', document.getElementById('details').value);
        formData.append('allowed', allow);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbweMUN_QwVR7fUrzL_GcPFVFkNkjq3Sao5-lcLglsHi-ADc5ls_ImOq4ia9yIBMO9kR/exec', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text(); 
            setFlashMessage({ message: '送信が完了しました。', type: 'success' });
        } catch (error) {
            console.error('送信エラー:', error);
            setFlashMessage({ message: '送信に失敗しました。', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='formMain'>
            <div className="container mt-1">
                <h2 className="w-100 mb-5" style={{ textAlign: "center" }}>Contact</h2>
                <form method="POST" onSubmit={sendContact}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">お名前<em className='inputNeed'>必須</em></label>
                        <input type="text" className={"form-control" + (fullName ? " border-success " : " border-danger ")} id="name" name='name' required onChange={(e) => { handleFullName(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">メールアドレス<em className='inputNeed'>必須</em></label>
                        <input type="email" className={"form-control" + (email ? " border-success " : " border-danger ")} id="email" name="email" required onChange={(e) => { handleEmail(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm" className="form-label">確認メールアドレス<em className='inputNeed'>必須</em></label>
                        <input type="email" className={"form-control" + (confirm ? " border-success " : " border-danger ")} id="confirm" required onChange={(e) => { handleConfirm(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inquiry" className="form-label">お問い合わせフォーム<em className='inputNeed'>必須</em></label>
                        <select value={selectedType} className={"form-select" + (type ? " border-success " : " border-danger ")} id="inquiry" name="inquiry" required onChange={(e) => { handleType(e) }}>
                            <option defaultValue disabled value="">選択してください</option>
                            <option value="product">商品について</option>
                            <option value="service">サービスについて</option>
                            <option value="other">その他</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="details" className="form-label">お問い合わせ<em className='inputNeed'>必須</em></label>
                        <textarea className={"form-control" + (about ? " border-success " : " border-danger ")} id="details" name="details" rows="4" required onChange={(e) => { handleAbout(e) }}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-check-label" htmlFor="allowed" style={{ width: "auto" }}>
                            <input type="checkbox" className={(allow ? " border-success " : " border-danger ")} id="allowed" name="allowed" style={{ marginRight: "10px" }} required checked={allow} onChange={handleAllow} />個人情報の取り扱いに同意する<em className='inputNeed'>必須</em>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-dark w-100" id='submit' disabled={isSubmitting || !(fullName && email && confirm && type && about && allow)}>
                        {isSubmitting ? '送信中...' : '送信'}
                    </button>
                </form>
                <div className={`flashmessage ${flashMessage.type}`} style={{ display: flashMessage.message ? 'block' : 'none' }}>
                    {flashMessage.message}
                </div>
                {isSubmitting && <div className="loading-indicator"><div>Sending...</div></div>}
            </div>
        </div>
    );
};

export default ContactFormSection;

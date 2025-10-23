# Gift Card Donation Form - Email Integration Setup

Your gift card donation form now has two implementation options. Choose the one that best fits your needs.

## 🎯 Current Implementation: EmailJS (Recommended)

The form is currently set up to use EmailJS, which provides:
- ✅ Free tier with 200 emails/month
- ✅ File attachment support
- ✅ No backend required
- ✅ Easy setup (5-10 minutes)

### Quick Setup (EmailJS)

1. **Create Account**: Go to [emailjs.com](https://www.emailjs.com) and sign up
2. **Add Email Service**: Connect your Gmail/Outlook account
3. **Create Template**: Set up an email template for donations
4. **Get Credentials**: Copy your Service ID, Template ID, and Public Key
5. **Update Code**: Edit `src/components/GiftCardDonationForm.js` (lines 60-62)

**Detailed instructions**: See `EMAILJS_SETUP_GUIDE.md`

---

## 🔄 Alternative Option: Formspree (Simpler)

If you prefer a simpler setup without coding:

### Setup Steps (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your endpoint URL
3. Update `src/pages/Donate.js`:

```javascript
// Change this line (around line 6):
import GiftCardDonationForm from "../components/GiftCardDonationForm";

// To this:
import GiftCardDonationForm from "../components/GiftCardDonationFormSimple";
```

4. Edit `src/components/GiftCardDonationFormSimple.js` (line 24):
```javascript
const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT_HERE", {
```

**Benefits of Formspree:**
- ⚡ Faster setup (2 minutes)
- 📧 50 submissions/month (free tier)
- 🔒 Spam protection included
- 📊 Built-in analytics

---

## 📋 Comparison

| Feature | EmailJS | Formspree |
|---------|---------|-----------|
| Setup Time | 5-10 min | 2 min |
| Free Tier | 200 emails/month | 50 submissions/month |
| File Attachments | ✅ Yes | ✅ Yes |
| Custom Templates | ✅ Yes | ❌ No |
| Backend Required | ❌ No | ❌ No |
| Spam Protection | ⚠️ Basic | ✅ Advanced |

---

## 🚀 Quick Start (Choose One)

### Option A: EmailJS (Current)
```bash
# Already installed! Just configure:
1. Follow EMAILJS_SETUP_GUIDE.md
2. Update credentials in GiftCardDonationForm.js
3. Test the form
```

### Option B: Formspree (Alternative)
```bash
# Switch to simpler version:
1. Create Formspree account
2. Get endpoint URL
3. Update import in Donate.js
4. Update endpoint in GiftCardDonationFormSimple.js
```

---

## 🧪 Testing Your Form

After setup, test with:
1. Fill in name and email
2. Upload two test images (< 5MB each)
3. Submit the form
4. Check your email inbox (matchinggift1@gmail.com)

---

## 🛠️ Troubleshooting

### EmailJS Issues
- **No emails received**: Check Service ID, Template ID, and Public Key
- **Console errors**: Verify EmailJS account is verified
- **Images not showing**: Some email clients block base64 images

### Formspree Issues
- **Form not submitting**: Verify endpoint URL is correct
- **Spam protection blocking**: Add reCAPTCHA in Formspree dashboard
- **File size errors**: Reduce image size or upgrade plan

---

## 📞 Support

- **EmailJS**: [emailjs.com/docs](https://www.emailjs.com/docs/)
- **Formspree**: [help.formspree.io](https://help.formspree.io/)
- **Project Issues**: Contact your development team

---

## 🔐 Security Notes

- ✅ All credentials are safe for client-side use
- ✅ No email passwords are exposed
- ✅ File uploads are validated (size & type)
- ✅ Form includes spam protection

---

## 📈 Upgrading

### EmailJS Pro ($15/month)
- 1,000 emails/month
- Priority support
- Remove EmailJS branding

### Formspree Gold ($10/month)
- 1,000 submissions/month
- Advanced spam protection
- Custom redirects
- Webhooks

---

## ✅ Setup Checklist

- [ ] Choose EmailJS or Formspree
- [ ] Create account on chosen service
- [ ] Get credentials/endpoint
- [ ] Update code with credentials
- [ ] Test form with sample data
- [ ] Verify email receipt
- [ ] Deploy changes

---

**Need help?** Check the detailed guides:
- EmailJS: `EMAILJS_SETUP_GUIDE.md`
- Both options include inline code comments
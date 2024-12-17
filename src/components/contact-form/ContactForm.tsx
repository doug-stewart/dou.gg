'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const TestBody = `Time Sent: {time}

Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse quis iaculis aliquet non quam laoreet dis. Himenaeos porttitor ex nec sollicitudin habitant; pulvinar magnis dictum. Suscipit risus ad suspendisse; finibus nisi efficitur mi.

Aenean suspendisse eget penatibus ad donec feugiat semper. Vitae magna commodo est lacinia class at etiam urna ipsum. Ad sodales at ridiculus cubilia ex quisque.`;

const ContactForm = () => {
    const messageMax = 1200;
    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    });

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: `Test - ${time}`,
            email: 'test@test.com',
            subject: '',
            message: TestBody,
        },
    });

    const messageLength = watch('message').length;
    const messageLengthWarn = messageMax - 100 < messageLength && messageLength < messageMax;
    const messageLengthError = messageLength > messageMax;

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label className="field">
                <span className="label">Your Name</span>
                <input className="input" {...register('name', { required: true, minLength: 3 })} />
                {errors.name && <span className="error">Lorem ipsuom dolor sit amet.</span>}
            </label>
            <label className="field">
                <span className="label">Email Address</span>
                <input className="input" type="email" {...register('email', { required: true })} />
                {errors.email && <span className="error">Lorem ipsuom dolor sit amet.</span>}
            </label>
            <label className="field" tabIndex={-1}>
                <span className="label">Subject</span>
                <input className="input" tabIndex={-1} {...register('subject')} />
            </label>
            <label className="field">
                <span className="label">What&rsquo;s up?</span>
                <div className="textarea">
                    <textarea
                        className="input"
                        {...register('message', {
                            required: true,
                            minLength: 5,
                            maxLength: messageMax,
                        })}
                    />
                    <p
                        className={clsx(
                            'textarea-count',
                            messageLengthWarn && 'is-warn',
                            messageLengthError && 'is-over'
                        )}
                    >
                        {messageLength} / {messageMax}
                    </p>
                </div>
                {errors.message && <span className="error">Lorem ipsuom dolor sit amet.</span>}
            </label>
            <button type="submit" className="submit">
                Send it
            </button>
        </form>
    );
};

export { ContactForm };

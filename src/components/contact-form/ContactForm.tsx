'use client';

import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactForm = () => {
    const messageMax = 1200;
    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    });

    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        clearErrors,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: `Test - ${time}`,
            email: '',
            subject: '',
            message: '',
        },
    });

    const messageLength = watch('message').length;
    const messageLengthWarn = messageMax - 100 < messageLength && messageLength < messageMax;
    const messageLengthError = messageLength > messageMax;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);

        const response = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.ok) {
            clearErrors();
            reset();
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <>
            {status === 'success' && (
                <p className="form-status--succeeded">
                    <strong>Your message has been sent!</strong>
                    Thanks for reaching out! I'll get back to you as soon as I can but in the mean
                    time, have you seen my <a href="/blog">my blog</a>?
                </p>
            )}

            {status === 'error' && (
                <p className="form-status--failed">
                    <strong>Your message failed to send&hellip;</strong>
                    I'm not sure why it failed but you can try again or just{' '}
                    <a href="mailto:hi@dou.gg">email me</a> directly.
                </p>
            )}

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label className={clsx('field', errors.name && 'has-error')}>
                    <span className="label">Your Name</span>
                    <input
                        className="input"
                        {...register('name', { required: true, minLength: 3 })}
                    />
                    {errors.name && <span className="error">Lorem ipsuom dolor sit amet.</span>}
                </label>
                <label className={clsx('field', errors.email && 'has-error')}>
                    <span className="label">Email Address</span>
                    <input
                        className="input"
                        type="email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="error">Lorem ipsuom dolor sit amet.</span>}
                </label>
                <label className={clsx('field', errors.subject && 'has-error')} tabIndex={-1}>
                    <span className="label">Subject</span>
                    <input className="input" tabIndex={-1} {...register('subject')} />
                </label>
                <label className={clsx('field', errors.message && 'has-error')}>
                    <span className="label">What&rsquo;s up?</span>
                    <div className="textarea input">
                        <textarea
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
        </>
    );
};

export { ContactForm };

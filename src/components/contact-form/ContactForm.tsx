'use client';

import clsx from 'clsx';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface Inputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const MESSAGE_MAX = 1200;
const MESSAGE_MIN = 5;

const ContactForm = () => {
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
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const messageLength = watch('message').length;
    const messageLengthWarn = MESSAGE_MAX - 100 < messageLength && messageLength < MESSAGE_MAX;
    const messageLengthError = messageLength > MESSAGE_MAX;

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
                    {errors.name && (
                        <span className="error">Name is required and must be &gt;3 characters</span>
                    )}
                </label>
                <label className={clsx('field', errors.email && 'has-error')}>
                    <span className="label">Email Address</span>
                    <input
                        className="input"
                        type="email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && (
                        <span className="error">Please enter a valid email address</span>
                    )}
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
                                minLength: MESSAGE_MIN,
                                maxLength: MESSAGE_MAX,
                            })}
                        />
                        <p
                            className={clsx(
                                'textarea-count',
                                messageLengthWarn && 'is-warn',
                                messageLengthError && 'is-over',
                            )}
                        >
                            {messageLength} / {MESSAGE_MAX}
                        </p>
                    </div>
                    {errors.message && (
                        <span className="error">
                            Your message must be within {MESSAGE_MIN}–{MESSAGE_MAX} characters
                        </span>
                    )}
                </label>
                <button type="submit" className="submit">
                    Send it
                </button>
            </form>
        </>
    );
};

export { ContactForm };

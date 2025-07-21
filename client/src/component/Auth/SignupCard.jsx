import { Card, CardBody, CardHeader } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

export default function SignupCard({ signupForm, setSignupForm, validationErrors, handleSignup, isPending, error }) {
  console.log("validationErrors in SignupCard :", validationErrors);
  console.log("error in SignupCard :", error);
  
  return (
    <Card shadow='lg' className='bg-white dark:bg-gray-700 p-6'>
      <CardHeader className='fex flex-col items-start'>
        <h2 className='text-2xl font-semibold'>Sign Up</h2>
        <p className='text-xs text-slate-400'>We would love to be in touch with you!</p>
        {validationErrors && (
          <div className="error-messages text-sm">
            {Object.values(validationErrors).map((error, index) => (
              error && <p key={index} className="text-red-700">{error}</p> 
            ))}
          </div>
        )}
        { error && <p className="error">{error}</p> }
      </CardHeader>
      <CardBody>
        <form className='flex flex-col gap-4' onSubmit={handleSignup}>
          <div className='flex gap-2'>
            <Input 
              className="max-w-full"
              label="First Name"
              disabled={isPending}
              onChange={(e) => setSignupForm({ ...signupForm, firstName: e.target.value })}
            />
            <Input
              className="max-w-full"
              label="Last Name"
              disabled={isPending}
              onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })}
            />
          </div>
          <Input 
            className="max-w-full"
            label="Email"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Username"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Password"
            type="password"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
          />
          <Input 
            className="max-w-full"
            label="Confirm Password"
            type="password"
            disabled={isPending}
            onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
          />
          <Button
            onPress={handleSignup}
            isLoading={isPending}
            color='primary'
            variant='flat'
            disabled={isPending}
          >
            { isPending ? 'Signing Up...' : 'Sign Up' }
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
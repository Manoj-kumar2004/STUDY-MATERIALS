function X=DTFT1(x,N)
    p=0;
for w=0:0.001:pi
    p=p+1;
     X(p)=0;
     for n=0:N-1
         X(p)=X(p)+x(n+1)*exp(-1i*w*n);
     end
end